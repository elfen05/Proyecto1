"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template
from Proyecto1 import app
import requests
from flask import request

@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )

@app.route('/mostrarpaises')
def mostrarpaises():
    url = "http://192.168.0.7:5000/pais"
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    listaPaises= response.json()
    #print(type(listaPaises))

    return render_template(
        'mostrarpaises.html',
        title='Mostrando Paises',
        year=datetime.now().year,
        message='paises',lista=listaPaises
    )

@app.route('/agregarpais')
def agregarpais():
    #Request from postma
    return render_template('agregarpais.html')


@app.route('/deleteList')
def deleteList():
    #Request from postma
    return render_template('deleteList.html')
 
@app.route('/ciudadesPais')
def ciudadessPais():
    id = request.args.get('id')
    print(id)
    url = "http://192.168.0.7:5000/pais/"+id+"/ciudad/"
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    listaCiudadesPais= response.json()
    print(listaCiudadesPais)
    return render_template('ciudadesPais.html',lista=listaCiudadesPais, idpais=id)