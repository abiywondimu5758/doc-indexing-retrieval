from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from gensim.models import Word2Vec, KeyedVectors, FastText
from gensim.utils import simple_preprocess
from transformers import BertTokenizer, BertModel
import torch
# from transformers.utils import init_empty_weights
from contextlib import contextmanager
import transformers.modeling_utils as modeling_utils


class Word2VecEmbeddingView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract text data from the request
        text_data = request.data.get("text", "")
        if not text_data:
            return JsonResponse({"error": "No text provided"}, status=400)

        # Preprocess the text into tokens
        sentences = [simple_preprocess(text_data)]

        # Train a Word2Vec model
        model = Word2Vec(sentences, vector_size=100, window=5, min_count=1, workers=4)

        # Generate embeddings for each word
        embeddings = {word: model.wv[word].tolist() for word in model.wv.index_to_key}

        return JsonResponse({"embeddings": embeddings})

class GloveEmbeddingView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract text data from the request
        text_data = request.data.get("text", "")
        if not text_data:
            return JsonResponse({"error": "No text provided"}, status=400)

        # Load pre-trained GloVe embeddings (ensure the file path is correct)
        glove_path = "/path/to/glove.6B.100d.txt"  # Update this path
        glove_model = KeyedVectors.load_word2vec_format(glove_path, binary=False, no_header=True)

        # Tokenize the input text
        words = simple_preprocess(text_data)

        # Generate embeddings for each word
        embeddings = {}
        for word in words:
            if word in glove_model:
                embeddings[word] = glove_model[word].tolist()
            else:
                embeddings[word] = None  # Word not in GloVe vocabulary

        return JsonResponse({"embeddings": embeddings})

class FastTextEmbeddingView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract text data from the request
        text_data = request.data.get("text", "")
        if not text_data:
            return JsonResponse({"error": "No text provided"}, status=400)

        # Preprocess the text into tokens
        sentences = [simple_preprocess(text_data)]

        # Train a FastText model
        model = FastText(sentences, vector_size=100, window=5, min_count=1, workers=4)

        # Generate embeddings for each word
        embeddings = {word: model.wv[word].tolist() for word in model.wv.index_to_key}

        return JsonResponse({"embeddings": embeddings})

# Monkey-patch init_empty_weights if it's not defined
if not hasattr(modeling_utils, "init_empty_weights"):
    def init_empty_weights(*args, **kwargs):
        @contextmanager
        def dummy_context_manager():
            yield
        return dummy_context_manager()
    modeling_utils.init_empty_weights = init_empty_weights

# Patch _find_missing_and_unexpected_keys to bypass find_tied_parameters
def dummy_find_missing_and_unexpected_keys(*args, **kwargs):
    # Return empty lists for missing and unexpected keys
    return ([], [])

modeling_utils._find_missing_and_unexpected_keys = dummy_find_missing_and_unexpected_keys


class BertEmbeddingView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract text data from the request
        text_data = request.data.get("text", "")
        if not text_data:
            return JsonResponse({"error": "No text provided"}, status=400)

        # Load pre-trained BERT model and tokenizer
        tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
        model = BertModel.from_pretrained("bert-base-uncased")

        # Tokenize and encode the input text
        inputs = tokenizer(text_data, return_tensors="pt", truncation=True, padding=True, max_length=512)

        # Generate embeddings
        with torch.no_grad():
            outputs = model(**inputs)
            embeddings = outputs.last_hidden_state.mean(dim=1).squeeze().tolist()  # Sentence-level embedding

        return JsonResponse({"embedding": embeddings})

class GPTEmbeddingView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract text data from the request
        text_data = request.data.get("text", "")
        if not text_data:
            return JsonResponse({"error": "No text provided"}, status=400)
        
        # Load pre-trained GPT2 model and tokenizer
        from transformers import GPT2Tokenizer, GPT2Model
        tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
        # Set pad_token to eos_token since GPT2 doesn't have one by default
        tokenizer.pad_token = tokenizer.eos_token
        model = GPT2Model.from_pretrained("gpt2")
        
        # Tokenize and encode the input text
        inputs = tokenizer(text_data, return_tensors="pt", truncation=True, padding=True, max_length=512)
        
        # Generate embeddings with mean pooling
        with torch.no_grad():
            outputs = model(**inputs)
            embeddings = outputs.last_hidden_state.mean(dim=1).squeeze().tolist()
        
        return JsonResponse({"embedding": embeddings})