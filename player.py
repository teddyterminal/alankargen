import numpy as np

numf = {0: "S", 1: "r", 2: "R", 3: "g", 4: "G", 5: "m", 6: "M", 7: "P", 8: "d", 9: "D", 10: "n", 11: "N"}
numb = {v: k for k, v in numf.items()}

kf = {"F": 349.23, "F#": 369.99, "G": 392, "G#": 415.3, "A": 220, "A#": 233.08, "B": 246.94, "C": 261.63, "C#": 277.18, "D": 293.66, "D#": 311.13, "E": 329.63}

def playstring(string, key, bpm, asc = True): 
    ks = kf[key]
    
    freqs = []
    
    idx = 0

    if len(string) >= 15 and string[:15] == "Memory Overload": 
        return None

    for char in string: 
        n = numb[char]
        #print(asc, char, idx)
        if asc and (char.lower() == "n" or char.lower() == "d") and (idx == 0 or idx == 1 or idx < len(string)/4): 
            n -= 12
        if asc and char == "S" and idx == len(string) - 1: 
            n = 12
        if not asc and (char == "S" or char.lower() == "r") and (idx == 0 or idx == 1 or idx < len(string)/4): 
            n += 12
        if not asc and (char.lower() == "n") and (idx == len(string)-1 or idx == len(string) - 2 or idx > len(string)*3/4): 
            n -= 12
        
        freqs.append(ks*2**(n/12))
        idx += 1
    
    l = 30/bpm*len(freqs)

    output = "\"playSound(\'sine\', " + str(freqs[0]) + "," + str(l)
    
    idx = 1
    l = 30/bpm

    for k in freqs[1:]: 
        output += ", " + str(k) + ", " + str(l*idx) 
        idx += 1

    output += ")\""

    return output