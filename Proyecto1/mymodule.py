
def mostrarCiudadesPais(id):
    url = "http://192.168.0.7:5000/pais/"+id+"/ciudad/"
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    listaciudades= response.json()
    return listaciudades