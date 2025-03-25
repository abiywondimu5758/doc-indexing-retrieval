from rest_framework.test import APIRequestFactory
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from collections import Counter
from .models import Document, InverseIndex

from .serializers import DocumentSerializer



import math
# import nltk
from etnltk.tokenize.am import word_tokenize as amharic_tokenize
from etnltk.lang.am.normalizer import ( 
  normalize_labialized, 
  normalize_shortened,
  normalize_punct,
  normalize_char
)

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# nltk.download('punkt')
# nltk.download('punkt_tab')
# nltk.download('stopwords')

from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

# sentenc_tokenize
# RegexpTokenizer
# whitespaceTokenizer

# lancaster stemmer
# snowball stemmer
# wordnet lemmatizer
amh_stopwords = ["የሚችል","ስለ","ከላይ","እንደገና","በመላ","እንደገና","መቃወም","አይደለም","የሚፈቅደው","እኔ","መካከል","መካከል","አንድ","እና","ሌላ","ማንም","ማንም","ሰው","በማንኛውም","መንገድ","ማንም","ማንኛውም","በየትኛውም","ቦታ","ለየት","ይታይ","አመስግኑት","ተገቢ","አይደለም","ዙሪያ","እንደ","ጎን","ጠይቅ","መጠየቅ","ተያይዟል","በ","ይገኛል","ራቅ","አስፈሪ","ለ","ሆነ","መሆን","በፊት","ከኋላ","ሁለቱም","አጭር","ግን","እንበል","መጣ","አይችልም","አይችልም","ምክንያት","በእርግጠኝነት","ማጤን","ማጤን","የያዘ","የያዘ","ይይዛል","የሚዛመደው","አይችልም","ኮርስ","አሁን","መ","በእርግጠኝነት","ይገለጻል","ቢሆንም","አልተደረገም","አልሆነም","የተለየ","አደረገ","አያደርግም","ወደታች","ወደታች","በጊዜው","እያንዳንዱ","ኢዱ","ለምሳሌ","ስምንት","ወይ","ቦታ","በቃ","ምሳሌ","በስተቀር","ሩቅ","ጥቂት","አምስተኛ","መጀመሪያ","አምስት","የተከተለ","መከተል","የሚከተለው","ለ","የቀድሞ","የቀድሞ","የሰጠ","ሂድ","ይሄዳል","ይሄዳል","ሄዷል","አግኝቷል","አደረሳችሁ","ሰላምታ","ሸ","ነበር","አልሆነም","ይከሰታል","በጭንቅ","አለው","የሌለው","የነበረው","የሌለው","ያለው","ሄሎ","እገዛ","ስለዚህ","እሷን","እዚህ","በተስፋ","እንዴት","ይሁን","እንጂ","ይሁን","እንጂ","እኔ","ከሆነ","ተናቆት","ወዲያው","ይልቅ","ወደ","አይደለም","ይሆናል","እራሱ","በቃ","አቆይ","ይጠብቃል","ይጠብቃል","አወቅ","የሚታወቅ","ያውቃል","የመጨረሻው","በቅርቡ","በኋላ","የኋለኛው","እንዳንል","እንወድ","ይመስላል","በዋነኛነት","ብዙ","ይችላል","ምናልባት","እኔ","ማለት","ነው","ይህ","በእንዲህ","እንዳለ","ብቻ","ይችላል","ተጨማሪ","ከዚህ","በላይ","በቅርብ","አስፈላጊ","ፍላጎት","ፍላጎት","አዲስ","ያልሆነ","የለም","ማንም","ጠፍቷል","ብዙውን ጊዜ","ኦህ","እሺ","እሺ","አሮጌው","ላይ","አንድ ጊዜ","አንድ","አንድ","ብቻ","ላይ","ወይም","ሌሎች","ካለበለዚያ","የእኛ","በተለይ","በተለይ","ምናልባትም","የተቀመጠ","እባክዎ","ፕላስ","ይቻላል","የሚገመተው","ምናልባት","ይሰጣል","በአንጻራዊነት","በቅደም","ተከተል","ትክክል","ስ","ተብሏል","ተመሳሳይ","አየው","ይላል","ሲል","ይላል","ሁለተኛ","ሁለተኛ","ማየት","ማየት","ይመስላል","ይመስላል","የሚመስል","ይመስላል","የታየ","እራስ","የላከ","ቁምነገር","ሰባት","በርካታ","ይኖሯታል","አለባት","ጀምሮ","አንድ","ሰው","አንድ","ነገር","አንዳንድ ጊዜ","አንዳንድ","ጊዜ","አንድ","ቦታ","በቅርቡ","ይቅርታ","የተገለጸ","ይግለጹ","የሚገልጽ","አሁንም","ንኡስ","እንደ","እርግጠኛ","ተወስዷል","አመሰግናለሁ","ተመስገን","እነሱ","ናቸው","አስበዋል","መሞከር","ሁለት ጊዜ","ሁለት","ስር","በሚያሳዝን","ሁኔታ","ካልሆነ","በስተቀር","ላይ","እኛ","ጥቅም","ላይ","የዋለ","ጠቃሚ","ይጠቀማል","ይጠቀማል","ይፈልጋል","ይፈልጋል","ነበር","እንሆናለን","እንኳን","ደህና","መጣችሁ","መቼ","የትኛው","እያለ","ወዴት","ሙሉ","ማን","ማን","የማን","ለምን","ይፈቅዳል","የሚፈልግ","የሚመኝ","ከ","አይገርምም","አንተ","ታደርጋለህ","ታደርጋለህ","አንተ","ነህ","አንተ","የራስህ","የራስህ","ራስህ","ራስህ","ዜሮ"]

factory = APIRequestFactory()

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    # Removed the process method

 # Import Abyssinica for Amharic tokenization

class TokenizeDocumentAPIView(APIView):
    def post(self, request):
        documents = request.data.get("documents")
        results = []
        if documents and isinstance(documents, list):
            # Processing multiple documents
            for doc_data in documents:
                title = doc_data.get("title")
                language = doc_data.get("language","en")
                text = doc_data.get("original_text", "")
                
                if not title or not text:
                    results.append({"error": "Title and original_text required.", "title": title})
                    continue
                processed_text = text.lower()
                if language == "am":
                    tokens = amharic_tokenize(processed_text)
                    
                else:
                    tokens = word_tokenize(processed_text)
                    tokens = [word for word in tokens if word.isalnum()]  # alphanumeric filtering
                token_counts = dict(Counter(tokens))
                
                docs = Document.objects.filter(title=title)
                if docs.exists():
                    doc = docs.first()
                else:
                    doc = Document.objects.create(title=title, original_text=text, language=language)
                doc.tokenized_text = token_counts
                doc.save()
                results.append({"title": title, "tokens": token_counts, "language": language})
            return Response({"results": results})
        else:
            # Fallback to single document processing
            title = request.data.get("title")
            language = request.data.get("language", "en")
            text = request.data.get("original_text", "")
            if not title or not text:
                return Response({"error": "Title and original_text required."}, status=status.HTTP_400_BAD_REQUEST)
            processed_text = text.lower()
            if language == "am":
                tokens = amharic_tokenize(processed_text)
                print("tokens")
            else:
                tokens = word_tokenize(processed_text)
                tokens = [word for word in tokens if word.isalnum()]  # alphanumeric filtering
                print(tokens)
            token_counts = dict(Counter(tokens))
            print(token_counts)
            docs = Document.objects.filter(title=title)
            if docs.exists():
                doc = docs.first()
            else:
                doc = Document.objects.create(title=title, original_text=text, language=language)
            doc.tokenized_text = token_counts
            doc.save()
            return Response({"title": title, "tokens": token_counts, "language": language})

class StopwordDocumentAPIView(APIView):
    def post(self, request):
        # Check if multiple document input is provided in the "results" field
        documents = request.data.get("results")
        results = []
        
        if documents and isinstance(documents, list):
            for doc_data in documents:
                title = doc_data.get("title")
                tokens = doc_data.get("tokens")
                language = doc_data.get("language", "en")
                if not title or not tokens:
                    results.append({"error": "Title and tokens required.", "title": title})
                    continue
                docs = Document.objects.filter(title=title)
                if docs.exists():
                    doc = docs.first()
                else:
                    results.append({"error": "Document not found.", "title": title})
                    continue
                if language == "am":
                    stop_words = set(amh_stopwords)
                else:
                    stop_words = set(stopwords.words('english'))
                filtered = {word: count for word, count in tokens.items() if word.lower() not in stop_words}
                doc.stopword_removed_text = filtered
                doc.save()
                results.append({"title": title, "words": filtered, "language": language})
            return Response({"results": results})
        else:
            # Fallback to single document processing
            title = request.data.get("title")
            tokens = request.data.get("tokens")
            language = request.data.get("language", "en")
            if not title or not tokens:
                return Response({"error": "Title and tokens required."}, status=status.HTTP_400_BAD_REQUEST)
            docs = Document.objects.filter(title=title)
            if docs.exists():
                doc = docs.first()
            else:
                return Response({"error": "Document not found."}, status=status.HTTP_404_NOT_FOUND)
            if language == "am":
                stop_words = set(amh_stopwords)
            else:
                stop_words = set(stopwords.words('english'))
            filtered = {word: count for word, count in tokens.items() if word.lower() not in stop_words}
            doc.stopword_removed_text = filtered
            doc.save()
            return Response({"title": title, "words": filtered, "language": language})

class StemDocumentAPIView(APIView):
    def post(self, request):
        documents = request.data.get("results")
        posting_list = {}  # Aggregated posting list: word -> {titles: list of strings, frequency: int}
        results = []
        if documents and isinstance(documents, list):
            for doc_data in documents:
                title = doc_data.get("title")
                words = doc_data.get("words")
                language = doc_data.get("language", "en")
                if not title or not words:
                    results.append({"error": "Title and words required.", "title": title})
                    continue
                docs = Document.objects.filter(title=title)
                if not docs.exists():
                    results.append({"error": "Document not found.", "title": title})
                    continue
                if language == "am":
                    labialized_text = normalize_labialized(dict_keys_to_string(words))
                    labialized_dict = string_to_dict_keys(labialized_text)
                    shortened_text = normalize_shortened(labialized_text)
                    shortened_text1 = normalize_shortened(dict_keys_to_string(words))
                    shortened_dict = string_to_dict_keys(shortened_text1)
                    punctuation_text = normalize_punct(shortened_text)
                    punctuation_text1 = normalize_punct(dict_keys_to_string(words))
                    punctuation_dict = string_to_dict_keys(punctuation_text1)
                    characters_text = normalize_char(punctuation_text)
                    stemmed = string_to_dict_keys(characters_text)
                else:
                    ps = PorterStemmer()
                    stemmed = {}
                    labialized_dict = {}
                    shortened_dict = {}
                    punctuation_dict = {}
                    for word, count in words.items():
                        stem = ps.stem(word)
                        stemmed[stem] = stemmed.get(stem, 0) + count
                doc = docs.first()
                doc.stemmed_text = stemmed
                doc.save()
                for stem_word, freq in stemmed.items():
                    if stem_word not in posting_list:
                        posting_list[stem_word] = {"titles": [], "frequency": 0}
                    posting_list[stem_word]["titles"].append(title)
                    posting_list[stem_word]["frequency"] += freq
                results.append({
                    "title": title,
                    "words": stemmed,
                    "language": language,
                    "labialized": labialized_dict,
                    "shortened": shortened_dict,
                    "punctuation": punctuation_dict
                })
            sorted_posting_list = {k: posting_list[k] for k in sorted(posting_list)}
            
            for term, postings in sorted_posting_list.items():
                existing_entry = InverseIndex.objects.filter(term=term).first()
                if existing_entry:
                    existing_postings = existing_entry.postings
                    if not isinstance(existing_postings, dict):
                        existing_postings = {"titles": [], "frequency": 0}
                    for title in postings["titles"]:
                        if title not in existing_postings["titles"]:
                            existing_postings["titles"].append(title)
                    existing_postings["frequency"] += postings["frequency"]
                    existing_entry.postings = existing_postings
                    existing_entry.save()
                else:
                    InverseIndex.objects.create(term=term, postings=postings)
            return Response({"results": results, "posting_list": sorted_posting_list})
        else:
            title = request.data.get("title")
            words = request.data.get("words")
            language = request.data.get("language", "en")
            if not title or not words:
                return Response({"error": "Title and words required."}, status=status.HTTP_400_BAD_REQUEST)
            docs = Document.objects.filter(title=title)
            if docs.exists():
                doc = docs.first()
            else:
                return Response({"error": "Document not found."}, status=status.HTTP_404_NOT_FOUND)
            if language == "am":
                labialized_text = normalize_labialized(dict_keys_to_string(words))
                labialized_dict = string_to_dict_keys(labialized_text)
                shortened_text = normalize_shortened(labialized_text)
                shortened_dict = string_to_dict_keys(shortened_text)
                punctuation_text = normalize_punct(shortened_text)
                punctuation_dict = string_to_dict_keys(punctuation_text)
                characters_text = normalize_char(punctuation_text)
                stemmed = string_to_dict_keys(characters_text)
            else:
                ps = PorterStemmer()
                stemmed = {}
                labialized_dict = {}
                shortened_dict = {}
                punctuation_dict = {}
                for word, count in words.items():
                    stem = ps.stem(word)
                    stemmed[stem] = stemmed.get(stem, 0) + count
            doc.stemmed_text = stemmed
            doc.save()
            posting_list = {}
            for stem_word, freq in stemmed.items():
                posting_list[stem_word] = {"titles": [title], "frequency": freq}
            for term, postings in posting_list.items():
                existing_entry = InverseIndex.objects.filter(term=term).first()
                if existing_entry:
                    existing_postings = existing_entry.postings
                    if not isinstance(existing_postings, dict):
                        existing_postings = {"titles": [], "frequency": 0}
                    for title in postings["titles"]:
                        if title not in existing_postings["titles"]:
                            existing_postings["titles"].append(title)
                    existing_postings["frequency"] += postings["frequency"]
                    existing_entry.postings = existing_postings
                    existing_entry.save()
                else:
                    InverseIndex.objects.create(term=term, postings=postings)
                
            return Response({
                "title": title,
                "words": stemmed,
                "language": language,
                "posting_list": posting_list
            })

class UploadFileAPIView(APIView):
    def post(self, request):
        files = request.FILES.getlist('file')
        if not files:
            return Response({"error": "No file uploaded."}, status=400)
        results = []
        titles = request.data.getlist("title")
        for idx, file_obj in enumerate(files):
            ext = file_obj.name.split('.')[-1].lower()
            text = ""
            try:
                if ext == 'txt':
                    text = file_obj.read().decode("utf-8")
                elif ext == 'docx':
                    from docx import Document as DocxDocument
                    doc = DocxDocument(file_obj)
                    text = "\n".join([p.text for p in doc.paragraphs])
                elif ext == 'pdf':
                    import PyPDF2 
                    reader = PyPDF2.PdfReader(file_obj)
                    text = ""
                    for page in reader.pages:
                        text += page.extract_text() or ""
                elif ext == 'doc':
                    import textract
                    text = textract.process(file_obj).decode("utf-8")
                else:
                    results.append({"error": f"Unsupported file type: {file_obj.name}"})
                    continue
            except Exception as e:
                results.append({"error": str(e), "file": file_obj.name})
                continue
            paragraph = text.strip().split("\n")[0]
            title = titles[idx] if idx < len(titles) and titles[idx] else file_obj.name.rsplit('.', 1)[0]
            language = request.data.get("language", "en") 
            data = {
                'title': title,
                'language': request.data.get("language", "en"),
                'original_text': paragraph
            }
            new_request = factory.post('/api/documents/tokenize', data, format='json')
            response = TokenizeDocumentAPIView.as_view()(new_request)
            results.append(response.data)
        return Response({"results": results})
    
class BooleanRetrievalAPIView(APIView):
    def get(self, request):
        query = request.GET.get("q")
        lang = request.GET.get("lang", "en")
        if not query:
            return Response({"error": "Query is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        if lang == "am":
            operator_set = {"እና": "AND", "ወይ": "OR"}
            default_op = "AND"
        else:
            operator_set = {"and": "AND", "or": "OR", "not": "NOT"}
            default_op = "AND"

        tokens = query.split()
        filtered_tokens = [token for token in tokens if token.lower() not in operator_set.keys()]
        filtered_query = " ".join(filtered_tokens)
        
        if lang == "am":
            query_terms = process_amharic_query(filtered_query)
        else:
            query_terms = process_english_query(filtered_query)
        print("query terms",query_terms)
        processed_term_iter = iter(query_terms.keys())
        final_tokens = []
        for token in tokens:
            if token.lower() in operator_set:
                final_tokens.append(operator_set[token.lower()])
            else:
                final_tokens.append(next(processed_term_iter))
        
        include_docs = set()
        exclude_docs = set()
        last_op = default_op
        for token in final_tokens:
            if token in {"AND", "OR", "NOT"}:
                last_op = token
                continue

            try:
                index_entry = InverseIndex.objects.get(term=token)
                print("index_entry", index_entry)
                # Retrieve matching document titles from the "titles" key
                matching_docs = set(index_entry.postings.get("titles", []))
                print("matching_docs", matching_docs)
            except InverseIndex.DoesNotExist:
                matching_docs = set()
            if last_op == "NOT":
                exclude_docs.update(matching_docs)
            elif last_op == "OR":
                include_docs.update(matching_docs)
            else:
                if not include_docs:
                    include_docs = set(matching_docs)
                else:
                    include_docs.intersection_update(matching_docs)
            last_op = default_op

        final_results = include_docs - exclude_docs
        print(final_results)
        docs = Document.objects.filter(title__in=final_results).values("id", "title", "original_text")
        return Response({"results": list(docs)})

def calculate_tf(token_counts):
    total = sum(token_counts.values())
    if total == 0:
        return token_counts
    return {token: count / total for token, count in token_counts.items()}

def compute_tfidf(tf_vector, total_docs):
    tfidf = {}
    for term, tf in tf_vector.items():
        try:
            index_entry = InverseIndex.objects.get(term=term)
            df = len(index_entry.postings.get("titles", []))
        except InverseIndex.DoesNotExist:
            df = 0
        # Adding 1 to df for smoothing to avoid division by zero
        idf = math.log(total_docs / (df + 1))
        tfidf[term] = tf * idf
    return tfidf

def cosine_similarity(vec1, vec2):
    dot_product = sum(vec1.get(k, 0) * vec2.get(k, 0) for k in vec1)
    norm1 = math.sqrt(sum(v**2 for v in vec1.values()))
    norm2 = math.sqrt(sum(v**2 for v in vec2.values()))
    if norm1 == 0 or norm2 == 0:
        return 0
    return dot_product / (norm1 * norm2)

class VectorSpaceRetrievalAPIView(APIView):
    def get(self, request):
        query = request.GET.get('q', '')
        language = request.GET.get('lang', 'en')
        if not query:
            return Response({'error': "Missing query parameter 'q'."}, status=400)
        
        if language != "am":
            query_vector = process_english_query(query)
        else:
            query_vector = process_amharic_query(query)
        
        # Calculate query TF weights then convert to TF-IDF
        query_tf = calculate_tf(query_vector)
        total_docs = Document.objects.count()
        query_tfidf = compute_tfidf(query_tf, total_docs)
        

    
        scored_docs = []
        for doc in Document.objects.all():
            if not doc.stemmed_text:
                continue
            # Compute document TF and then TF-IDF
            doc_tf = calculate_tf(doc.stemmed_text)
            doc_tfidf = compute_tfidf(doc_tf, total_docs)
            score = cosine_similarity(query_tfidf, doc_tfidf)
            if score > 0:
                scored_docs.append((score, doc))
    
        scored_docs.sort(key=lambda x: x[0], reverse=True)
        results = []
        for score, doc in scored_docs:
            serialized = DocumentSerializer(doc).data
            serialized['similarity'] = score
            results.append(serialized)
        
        return Response({"results": results})


# class VectorSpaceRetrievalAPIView(APIView):
#     def get(self, request):
#         query = request.GET.get('q', '')
#         if not query:
#             return Response({'error': "Missing query parameter 'q'."}, status=400)

#         documents = [doc.stemmed_text for doc in Document.objects.all()]
#         vectorizer = TfidfVectorizer()
#         tfidf_matrix = vectorizer.fit_transform(documents)

#         query_vector = vectorizer.transform([query])
#         similarity_scores = cosine_similarity(query_vector, tfidf_matrix).flatten()

#         scored_docs = sorted(zip(similarity_scores, Document.objects.all()), reverse=True)

#         results = [
#             {"id": doc.id, "title": doc.title, "original_text": doc.original_text, "similarity": score}
#             for score, doc in scored_docs if score > 0
#         ]

#         return Response({"results": results})


def dict_keys_to_string(input_dict):
    return ' '.join(input_dict.keys())

def string_to_dict_keys(input_string, default_value=1):
    keys = input_string.split()
    return {key: default_value for key in keys}



def tokenize_text(text, language):
    processed_text = text.lower()
    if language == "am":
        tokens = amharic_tokenize(processed_text)
    else:
        tokens = word_tokenize(processed_text)
        tokens = [word for word in tokens if word.isalnum()]
    return dict(Counter(tokens))

def remove_stopwords(token_counts, language):
    if language == "am":
        stop_words = set(amh_stopwords)
    else:
        stop_words = set(stopwords.words('english'))
    return {word: count for word, count in token_counts.items() if word.lower() not in stop_words}

def stem_tokens(token_counts, language):
    if language == "am":
        # You can apply your existing normalization functions and convert the final result into a token dict.
        normalized_text = normalize_char(normalize_punct(normalize_shortened(normalize_labialized(dict_keys_to_string(token_counts)))))
        # Here we assume string_to_dict_keys is appropriate; adjust as needed.
        return string_to_dict_keys(normalized_text)
    else:
        ps = PorterStemmer()
        stemmed = {}
        for word, count in token_counts.items():
            stem = ps.stem(word)
            stemmed[stem] = stemmed.get(stem, 0) + count
        return stemmed

def process_query(query, language):
    tokens = tokenize_text(query, language)
    filtered = remove_stopwords(tokens, language)
    stemmed = stem_tokens(filtered, language)
    return stemmed

# Now update your query functions to use the helpers
def process_english_query(query):
    return process_query(query, 'en')

def process_amharic_query(query):
    return process_query(query, 'am')
    tokenize_data = {
        'title': 'query',
        'language': 'am',
        'original_text': query
    }
    tokenize_request = factory.post('/dummy/tokenize', tokenize_data, format='json')
    tokenize_response = TokenizeDocumentAPIView.as_view()(tokenize_request)
    tokens_dict = tokenize_response.data.get('tokens')
    
    stopword_data = {
        'title': 'query',
        'language': 'am',
        'tokens': tokens_dict
    }
    stopword_request = factory.post('/dummy/stopword', stopword_data, format='json')
    stopword_response = StopwordDocumentAPIView.as_view()(stopword_request)
    filtered_words = stopword_response.data.get('words')
    
    stem_data = {
        'title': 'query',
        'language': 'am',
        'words': filtered_words
    }
    stem_request = factory.post('/dummy/stem', stem_data, format='json')
    stem_response = StemDocumentAPIView.as_view()(stem_request)
    stemmed = stem_response.data.get('words')
    return stemmed