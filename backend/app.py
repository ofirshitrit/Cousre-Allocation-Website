from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Route to process form submission
@app.route('/process', methods=['POST'])
def process_form():
    courses_data = request.form.to_dict()
    # courses_data = "connection successful"
    
    print("Received form data:", courses_data)
    
    return jsonify({"data": courses_data}), 200

if __name__ == '__main__':
    app.run(debug=True)
