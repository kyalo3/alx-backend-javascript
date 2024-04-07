import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk import pos_tag

"""Download necessary NLTK data"""
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('wordnet')
nltk.download('stopwords')

""" Text to be processed"""
text = "Information technology is a tool that can be leveraged to make the world a better an safe place"

""" Tokenization"""
tokens = word_tokenize(text)
print(f"Tokens: {tokens}")

""" Stop words removal"""
stop_words = set(stopwords.words('english'))
filtered_tokens = [token for token in tokens if token not in stop_words]
print(f"Tokens after stop words removal: {filtered_tokens}")

""" Lemmatization"""
lemmatizer = WordNetLemmatizer()
lemmatized_tokens = [lemmatizer.lemmatize(token) for token in filtered_tokens]
print(f"Lemmatized tokens: {lemmatized_tokens}")

""" Text normalization (lowercasing)"""
normalized_tokens = [token.lower() for token in lemmatized_tokens]
print(f"Normalized tokens: {normalized_tokens}")
