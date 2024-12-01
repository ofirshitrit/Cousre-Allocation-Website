from flask import Flask, request, jsonify
from flask_cors import CORS
from fairpyx import Instance, AllocationBuilder
from fairpyx.algorithms import find_ACEEI_with_EFTB, tabu_search
from fairpyx.algorithms.ACEEI_algorithms.find_profitable_manipulation import find_profitable_manipulation
from fairpyx.adaptors import divide
from fairpyx.algorithms.ACEEI_algorithms.ACEEI import EFTBStatus
import logging
from LogCaptureHandler import *

# Create and configure the logger
log_capture_handler = LogCaptureHandler()
log_capture_handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(message)s')
log_capture_handler.setFormatter(formatter)

logger = logging.getLogger()
logger.addHandler(log_capture_handler)
logger.setLevel(logging.INFO)

app = Flask(__name__)
CORS(app)


def get_form_data(form_data):
    number_of_courses = form_data['numOfCourses']
    courses_capacities = form_data['coursesCapacities']
    number_of_students = form_data['numOfStudents']
    initial_budgets = form_data['budgets']
    agent_capacity = form_data['coursesToTake']
    valuations = form_data['ratings']
    algoName = form_data['algoName']

    return [number_of_courses, courses_capacities, number_of_students, initial_budgets, agent_capacity, valuations, algoName]

@app.route('/process', methods=['POST'])
def process_form():
    try:
        form_data = request.get_json()
        algoName = form_data['algoName']
        results = ""
        if algoName == "ACEEI":
            results = get_aceei_results(form_data)
        
        elif algoName == "Find Manipulation":
            print("In Find Manipulation!")
            results = get_find_manipulation_results(form_data)
          
        
        
        elif algoName == "Tabu Search":
            print("In Tabu Search!")
            results = get_tabu_search_results(form_data)
        else:
            results = "The Algorithm name is not correct. Try Again."
        print(f"The results of the {algoName} is: ", results)
    except Exception as e:
        print(e)

    return {"results": results}

def get_aceei_parameters(form_data):
    courses_capacities = form_data['coursesCapacities']
    initial_budgets = form_data['budgets']
    agent_capacity = form_data['coursesToTake']
    valuations = form_data['ratings']
    epsilon = form_data['epsilon']
    delta = form_data['delta']
    eftbStatus = form_data['eftbStatus']

    return [courses_capacities, initial_budgets, agent_capacity, valuations, epsilon,delta,  eftbStatus]

def get_aceei_results(form_data):
    courses_capacities, initial_budgets, agent_capacity, valuations, epsilon,delta,  eftbStatus = get_aceei_parameters(form_data)
    print("Courses Capacities:", courses_capacities)
    print("Initial Budgets:", initial_budgets)
    print("Agent Capacity:", agent_capacity)
    print("Valuations:", valuations)
    print("Epsilon:", epsilon)
    print("Delta:", delta)
    print("EFTB Status:", eftbStatus)
    instance = Instance(valuations, agent_capacity, item_capacities=courses_capacities)
    results = divide(find_ACEEI_with_EFTB, instance=instance, initial_budgets=initial_budgets, delta=delta, epsilon=epsilon, t=eftbStatus)
    return results


def get_find_manipulation_parameters(form_data):
    courses_capacities = form_data['coursesCapacities']
    initial_budgets = form_data['budgets']
    agent_capacity = form_data['coursesToTake']
    valuations = form_data['ratings']
    epsilon = form_data['epsilon']
    eftbStatus = form_data['eftbStatus']
    delta = form_data['delta']
    eta = form_data["eta"]
    choosen_student = form_data["choosenStudent"]
    beta = form_data["beta"]
    criteria_for_manipulation = form_data["cretiriaForManipulation"]
    return  [courses_capacities, initial_budgets, agent_capacity, valuations, epsilon,delta,  eftbStatus, eta,choosen_student,beta,  criteria_for_manipulation]


def get_find_manipulation_results(form_data):
    [courses_capacities, initial_budgets, agent_capacity, valuations, epsilon,delta,  eftbStatus, eta,choosen_student,beta,  criteria_for_manipulation]= get_find_manipulation_parameters(form_data)
    instance = Instance(valuations, agent_capacity, item_capacities=courses_capacities)
    algorithm = find_ACEEI_with_EFTB
    results = find_profitable_manipulation(mechanism=algorithm, student=choosen_student,
                                          true_student_utility=valuations[choosen_student],
                                          criteria=criteria_for_manipulation, eta=eta, instance=instance,
                                          initial_budgets=initial_budgets, beta=beta, delta=delta, epsilon=epsilon,
                                          t=eftbStatus)
    
    log_messages, status = log_capture_handler.extract_manipulation_status()

    return {"results": results, "status": status}

def get_tabu_search_parameters(form_data):
    courses_capacities = form_data['coursesCapacities']
    initial_budgets = form_data['budgets']
    agent_capacity = form_data['coursesToTake']
    valuations = form_data['ratings']
    beta = form_data['beta']
    deltas = form_data['deltas']
    
    return [courses_capacities, initial_budgets, agent_capacity, valuations, beta, deltas]

def get_tabu_search_results(form_data):
    courses_capacities, initial_budgets, agent_capacity, valuations, beta, deltas = get_tabu_search_parameters(form_data)
    print("Courses Capacities:", courses_capacities)
    print("Initial Budgets:", initial_budgets)
    print("Agent Capacity:", agent_capacity)
    print("Valuations:", valuations)
    print("Beta:", beta)
    print("Deltas:", deltas)

    instance = Instance(valuations, agent_capacity, item_capacities=courses_capacities)
    results =  divide(tabu_search, instance=instance, initial_budgets=initial_budgets, beta=beta, delta=deltas)

    return results

if __name__ == '__main__':
    app.run(debug=True)
