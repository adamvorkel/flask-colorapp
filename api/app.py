from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/', methods=['GET'])
def get():
    return jsonify({'msg': 'hello world'})


if __name__ == '__main__':
    app.run(debug=True)
