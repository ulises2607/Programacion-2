from datetime import datetime
from flask import Flask, jsonify, request
from config import Config
from .auxiliares import binDec

def init_app():
    """Crea y configura la aplicación Flask"""
    
    app = Flask(__name__, static_folder = Config.STATIC_FOLDER, template_folder = Config.TEMPLATE_FOLDER)
    
    app.config.from_object(Config)
    
    # Ejercicio 1
    @app.route('/')
    def bienvenida():
        try:
            return ({'message':'Bienvenido!'}, 200, {'Content-Type':'application/json'})
        except:
            return {'error': 'Ha ocurrido un error'}, 400
    
    # Ejercicio 2
    @app.route('/info/')
    def info():
        result = {'message' : f'Bienvenido a {Config.APP_NAME}!'}
        if result is not None:
            return (result, 200, {'Content-Type':'application/json'})
        else:
            return {'error': 'Ha ocurrido un error'}, 400
    
    # Ejercicio 3
    @app.route('/about/')
    def about():
        about_data = {
        "app_name": Config.APP_NAME,
        "description": Config.DESCRIPTION,
        "developers": Config.DEVELOPERS,
        "version": Config.VERSION
        }


        if about_data is not None:
            return (about_data, 200, {'Content-Type':'application/json'})
        else:
            return {'error': 'Ha ocurrido un error'}, 400

    # Ejercicio 4
    @app.route('/sum/<int:num1>/<int:num2>/')
    def sum(num1, num2):
        result = {'resultado' : num1+num2}
        try:
            return (result, 200, {'Content-Type':'application/json'})
        except ValueError:
            return {'error': 'Ha ocurrido un error'}, 400

    # Ejercicio 5
    @app.route('/age/<dob>')
    def edad(dob):
        try:
            dob_date = datetime.strptime(dob, "%Y-%m-%d")
            today = datetime.today()

            if dob_date > today:
                return {"error": "La fecha ingresada es superior a la fecha actual"}, 400

            age = today.year - dob_date.year
            age -= ((today.month, today.day) < (dob_date.month, dob_date.day))
        
            return {"edad": age}, 200

        except ValueError:
            return {"error": "La fecha ingresada es inválida. Se deba usar el formato ISO 8601 (YYYY-MM-DD)"}, 400

    # Ejercicio 6
    @app.route('/operate/<string:operation>/<int:num1>/<int:num2>')
    def operate(operation, num1, num2):
        try:
            if operation == 'sum':
                resultado = num1+num2

            elif operation == 'sub':
                resultado = num1-num2

            elif operation == 'mult':
                resultado = num1*num2

            elif operation == 'div':
                if num2 == 0:
                    return {'Division por cero, la división no está definida para ese valor'}, 400
                else:
                    resultado = num1/num2

            return ({'result': resultado}, 200, {'Content-Type':'application/json'})
        
        except ValueError:
            return {'error': 'No existe una ruta definida para el enpoint ingresado'}, 400

    # Ejercicio 7
    @app.route('/operate')
    def get_operate():

        operation = request.args.get('operation')
        num1 = int(request.args.get('num1'))
        num2 = int(request.args.get('num2'))

        if operation == 'sum':
            resultado = num1 + num2

        elif operation == 'sub':
            resultado = num1 - num2

        elif operation == 'mult':
            resultado = num1 * num2

        elif operation == 'div':
            if num2 == 0:
                return jsonify({"error": "La división por cero no está permitida"}), 400
            resultado = num1 / num2
        else:
            return jsonify({"error": "Operación no válida"}), 400

        return jsonify({"result": resultado})
    
    # Ejercicio 8
    @app.route('/title/<string:word>')
    def title(word):
        w = word.capitalize()
        try:
            return ({'formatted_word': w}, 200, {'Content-Type':'application/json'})
        except ValueError:
            return {'error': 'Ha ocurrido un error'}, 400
        
    # Ejercicio 9
    @app.route('/formatted/<string:dni>')
    def formatted(dni):
        sign = ['.','-']

        try:
            for s in sign:
                dni = dni.replace(s, '')
            if dni.isdigit() and len(dni) == 8 and dni[0] != '0':
                return ({'formatted_dni': dni}, 200, {'Content-Type':'application/json'})
            else:
                raise ValueError
        except ValueError:
            return {'error': 'Ha ocurrido un error'}, 400

    # Ejercicio 10
    @app.route('/format/')
    def format():
        firstname = request.args.get('firstname', default='')
        lastname = request.args.get('lastname', default='')
        age = request.args.get('dob', default='')
        dni = request.args.get('dni', default='')

        try:
            datos = {
                "firstname": title(firstname),
                "lastname": title(lastname),
                "age": edad(age)["edad"],
                "dni": formatted(dni)
                }
            return ( datos, 200, {'Content-Type':'application/json'})
            #return datos['age']
        except:
            return {'error': 'Ha ocurrido un error'}, 400
        #datos = [firstname, lastname, age, dni]
        #return datos
    ## Ejercicio 13
    @app.route('/convert/binary/<string:num>')
    def binarioadecimal(num):
        scan = []
        for i in num.split('.'):
            scan.append(i)

        try:
            if len(scan) > 1:
                return {'response': (binDec(scan[0],scan[1]))}, 200
            else:
                return {'response':binDec(scan[0])}, 200
            
        except:
            return {'error': 'Ha ocurrido un error'}, 400
    

    return app

