from flask import Flask
from flask import request
from flask import render_template
import alankar
import player

app = Flask(__name__)

@app.route('/')
def my_form():
    return render_template("index.html") # this should be the name of your html file

@app.route('/', methods=['POST'])
def my_form_post():

    text1 = request.form['text1']
    text2 = request.form['text2']
    text3 = request.form['text3']
    text4 = request.form['text4']


    output = "".join(["<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta name='viewport' content='width=device-width, initial-scale=1'>",
        '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">',
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">',
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">',
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',
        '<style> body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif} .w3-bar,h1,button {font-family: "Montserrat", sans-serif}',
        '.fa-anchor,.fa-coffee {font-size:200px}</style></head><body bgcolor = "FFBFAA">',
        '<style> p {color: blue} p:hover {color: red} p:active {color: red}</style>',
        '<center> <p></p><div style = "width: 95%; border: 1px solid #996955" id = "form" ><h1> Raag Alankar Generator',
        '</h1><form action="/" method="POST">',
        '<table> <tr>',
        '<td> <label> <strong> Raag: </strong> </label> </td> <td> <input id="auto" type="text" name="text1" placeholder = "Raag" value = "' + text1 + '"> </td> </tr>', 
        '<tr> <td> <label> <strong> Number: </strong> </label> </td> <td> <input type="number" name="text2" placeholder = "#" min = "1" max = "15" value = "' + text2 + '"> </td></tr>',
        '<tr> <td> <label> <strong> Key: </strong> </label> </td> <td> <select name="text3" placeholder = "Key">'])


    for option in ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]: 
        if text3 == option: 
            output += '<option value = "' + option + '" selected>' + option + '</option>'
        else: 
            output += '<option value = "' + option + '">' + option + '</option>'

    output += "".join([
        '</select> </td></tr>',
        '<tr> <td> <label> <strong> Speed: </strong> </label> </td><td> <input type="number" name="text4" placeholder = "B/M" min = "10" max = "500" value = "' + text4 + '"> </td> </tr> </table><br/>', 
        '<input type="submit" name="my-form" value="Get Alankars"> <input type="reset" value = "Last Query"> <p></p></form></div></center>',
        '<script src="../static/auto.js"></script>',
        '<script src="../static/simpletones.js"></script>',
        '<script> autocomplete(document.getElementById("auto"), raags); </script>',
        '<center><div style = "width:95%; border: 1px solid #996955" id = "form" ><p></p>'])

    try: 
        asc, desc, comp = alankar.alankar(text1, int(text2))
        ps = player.playstring("".join(asc[0]), text3, int(text4), asc = True)
    except Exception as e:
        #print(e)
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
            #print(asc[i])
            playable = "".join(asc[i])
            ps = player.playstring(playable, text3, int(text4), asc = True)
            if ps is not None: 
                output += "\n<p onclick = " + ps + " style='display:inline'>"
            else: 
                output += "<p style='display:inline'>"
            for k in asc[i]: 
                output += k 
                output += " "
            output += "</p><br/>"

        output += "<br/>"

        if len(desc) > 1: 
            output += "Multiple options for Raag <strong>" + text1 + "</strong>, descending Alankar " + text2 + ". Options Below: <br/>"
        else: 
            output += "Raag <strong>" + text1 + "</strong> descending Alankar " + text2 + ": <br/>"

        for i in range(len(desc)): 
            playable = "".join(desc[i])
            ps = player.playstring(playable, text3, int(text4), asc = False)
            if ps is not None: 
                output += "<p onclick = " + ps + " style='display:inline'>"
            else: 
                output += "<p style='display:inline'>"
            for k in desc[i]: 
                output += k 
                output += " "
            output += "</p><br/>"

        output += "<br/>" + "<p style = 'color:black'><em>Click any of the provided alankars to listen to them.</em></p><p></p></div></center></body></html>"

        #print(output)
        return output

if __name__ == '__main__':
    app.run()