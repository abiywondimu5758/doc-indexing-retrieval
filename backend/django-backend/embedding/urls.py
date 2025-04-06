from django.urls import path
from .views import Word2VecEmbeddingView
from .views import GloveEmbeddingView
from .views import FastTextEmbeddingView
from .views import BertEmbeddingView
from .views import GPTEmbeddingView

urlpatterns = [
    path('word2vec/', Word2VecEmbeddingView.as_view(), name='word2vec'),
    path('glove/', GloveEmbeddingView.as_view(), name='glove'),
    path('fasttext/', FastTextEmbeddingView.as_view(), name='fasttext'),
    path('bert/', BertEmbeddingView.as_view(), name='bert'),
    path('gpt/', GPTEmbeddingView.as_view(), name='gpt'),
]