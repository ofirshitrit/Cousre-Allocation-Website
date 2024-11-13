from flask import Flask, request, jsonify
from flask_cors import CORS
from fairpyx import Instance, AllocationBuilder
from fairpyx.algorithms import find_ACEEI_with_EFTB, tabu_search
from fairpyx.algorithms.ACEEI_algorithms.find_profitable_manipulation import find_profitable_manipulation
from fairpyx.adaptors import divide
from fairpyx.algorithms.ACEEI_algorithms.ACEEI import EFTBStatus


app = Flask(__name__)
CORS(app)

@app.route('/process', methods=['POST'])
def process_form():
    try:
        form_data = request.get_json()
        number_of_courses = form_data['numOfCourses']
        courses_capacities = form_data['coursesCapacities']
        number_of_students = form_data['numOfStudents']
        initial_budgets = form_data['budgets']
        agent_capacity = form_data['coursesToTake']
        valuations = form_data['ratings']
        instance = Instance(valuations, agent_capacity, item_capacities=courses_capacities)

        epsilon = 0.3
        delta = 0.01
        eftb = EFTBStatus.NO_EF_TB
        answer = divide(find_ACEEI_with_EFTB, instance=instance, initial_budgets=initial_budgets, delta=delta,
                    epsilon=epsilon, t=eftb)
        
        print("The answer of the ACEEI is: ", answer)
    except Exception as e:
        print(e)

    return {"answer": answer}

if __name__ == '__main__':
    app.run(debug=True)
