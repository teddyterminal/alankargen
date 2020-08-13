from flask import Flask
from flask import request
from flask import render_template
import alankar

app = Flask(__name__)

@app.route('/')
def my_form():
    return render_template("index.html") # this should be the name of your html file

@app.route('/', methods=['POST'])
def my_form_post():

    output = "".join(["<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1'>",
        '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">',
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">',
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">',
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',
        '<style> body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif} .w3-bar,h1,button {font-family: "Montserrat", sans-serif}',
        '.fa-anchor,.fa-coffee {font-size:200px}</style></head><body bgcolor = "FFBFAA"><center> <p></p><div style = "width: 95%; border: 1px solid #996955" id = "form" ><h1> Raag Alankar Generator',
        '</h1><form action="/" method="POST"><h3> Raag Name </h3><input type="text" name="text1"> <br/><h3> Alankar Number </h3>',
        '<input type="text" name="text2"> <br/> <br/> <input type="submit" name="my-form" value="Get Alankars"><p></p></form> </div></center>',
        '<center><div style = "width:95%; border: 1px solid #996955" id = "form" ><p></p>'])

    text1 = request.form['text1']
    text2 = request.form['text2']

    try: 
        asc, desc, comp = alankar.alankar(text1, int(text2))
    except:
        output += "Invalid Input. <p></p></div></center></body></html>"
        return output

    if comp == -1: 
        output += str("Raag <strong>" + text1 + "</strong> not found" + "<p></p></div></center></body></html>")
        return output
    elif comp == 0:
        output += str("Raag <strong>" + text1 + "</strong> has an invalid aaroha/avroha in our database, given by <br/>" + str(asc) + "; <br/>" + 
            str(desc) + "<p></p></div></center></body></html>")
        return output

    else: 
        
        if len(asc) > 1: 
            output += "Multiple options for Raag <strong>" + text1 + "</strong>, ascending Alankar " + text2 + ". Options Below: <br/>"
        else: 
            output += "Raag <strong>" + text1 + "</strong> ascending Alankar " + text2 + ": <br/>"

        for i in range(len(asc)): 
            for k in asc[i]: 
                output += k 
                output += " "
            output += "<br/>"

        output += "<br/>"

        if len(desc) > 1: 
            output += "Multiple options for Raag <strong>" + text1 + "</strong>, descending Alankar " + text2 + ". Options Below: <br/>"
        else: 
            output += "Raag <strong>" + text1 + "</strong> descending Alankar " + text2 + ": <br/>"

        for i in range(len(desc)): 
            for k in desc[i]: 
                output += k 
                output += " "
            output += "<br/>"

        output += "<br/>" + "<p></p></div></center></body></html>"

        print(output)
        return output

if __name__ == '__main__':
    app.run()