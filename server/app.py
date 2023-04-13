from lemma_helpers import get_lemmas, get_frequent_lemmas, get_sorted_lemmas, add_rank
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def index():
    return "Hello, World!"


@app.route('/lemmatize', methods=['POST'])
@cross_origin()
def lemmatize():
    input_text = request.json["text"]
    lemmas = get_lemmas(input_text)
    frequent_lemmas = get_frequent_lemmas(lemmas)
    sorted_lemmas = get_sorted_lemmas(frequent_lemmas)
    result = add_rank(sorted_lemmas)
    print(result)
    return {"result": result}


if __name__ == "__main__":
    app.run()