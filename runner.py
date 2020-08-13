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
    text1 = request.form['text1']
    text2 = request.form['text2']
    try: 
    	asc, desc, comp = alankar.alankar(text1, int(text2))
    except:
    	return "Invalid Input. Refresh to try a new query. "

    if comp == -1: 
        return str("Raag " + text1 + " not found" + "<br/><br/> Refresh to try a new query.")
    elif comp == 0:
        return str("Raag " + text1 + " has an invalid aaroha/avroha in our database, given by <br/>" + str(asc) + "; <br/>" + 
        	str(desc) + "<br/><br/> Refresh to try a new query.")

    else: 
    	output = ""
    	if len(asc) > 1: 
    		output += "Multiple options for Raag " + text1 + ", ascending Alankar " + text2 + ". Options Below: <br/>"
    	else: 
    		output += "Raag " + text1 + " ascending Alankar " + text2 + ": <br/>"

    	for i in range(len(asc)): 
	    	for k in asc[i]: 
    			output += k 
    			output += " "
    		output += "<br/>"

    	output += "<br/>"

    	if len(desc) > 1: 
    		output += "Multiple options for Raag " + text1 + ", descending Alankar " + text2 + ". Options Below: <br/>"
    	else: 
    		output += "Raag " + text1 + " descending Alankar " + text2 + ": <br/>"

    	for i in range(len(desc)): 
	    	for k in desc[i]: 
    			output += k 
    			output += " "
    		output += "<br/>"

    	output += "<br/>" + "<br/><br/> <a href = '#'> Click here </a> to try a new query."

    	return output

if __name__ == '__main__':
    app.run()