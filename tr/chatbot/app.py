from flask import Flask, request, jsonify
from langchain.document_loaders import PyPDFLoader
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.llms import Ollama
import os

app = Flask(__name__)

# Carregar els PDFs
documents = []
carpeta_pdfs = "pdfs"

for arxiu in os.listdir(carpeta_pdfs):
    if arxiu.endswith(".pdf"):
        loader = PyPDFLoader(os.path.join(carpeta_pdfs, arxiu))
        documents.extend(loader.load())

vectorstore = Chroma.from_documents(documents, embedding=OpenAIEmbeddings())
llama = Ollama(model="mistral")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    pregunta = data.get("pregunta", "")
    resposta = vectorstore.similarity_search(pregunta, k=1)
    return jsonify({"resposta": resposta[0].page_content})

if __name__ == "__main__":
    app.run(debug=True)
    
