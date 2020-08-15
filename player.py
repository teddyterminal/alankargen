import pyaudio
import numpy as np

numf = {0: "S", 1: "r", 2: "R", 3: "g", 4: "G", 5: "m", 6: "M", 7: "P", 8: "d", 9: "D", 10: "n", 11: "N"}
numb = {v: k for k, v in numf.items()}

kf = {"F": 174.61, "F#": 185, "G": 196, "G#": 207.65, "A": 220, "A#": 233.08, "B": 246.94, "C": 261.63, "C#": 277.18, "D": 293.66, "D#": 311.13, "E": 329.63}

def playstring(string, key, bpm, asc = True): 
    ks = kf[key]
    
    freqs = []
    
    idx = 0

    if string == "Memory Overload": 
        return None

    for char in string: 
        n = numb[char]
        #print(asc, char, idx)
        if asc and char.lower() == "n" and idx == 0: 
            n -= 12
        if asc and char == "S" and idx == len(string) - 1: 
            n = 12
        if not asc and (char == "S" or char.lower() == "r") and (idx == 0 or idx == 1 or idx < len(string)/2): 
            n += 12
        
        freqs.append(ks*2**(n/12))
        idx += 1
    
    l = 60/bpm*len(freqs)

    output = "\"playSound(\'sine\', " + str(freqs[0]) + "," + str(l)
    
    idx = 1
    l = 60/bpm

    for k in freqs[1:]: 
        output += ", " + str(k) + ", " + str(l*idx) 
        idx += 1

    output += ")\""

    return output



def play(bpm, frequencies):
    
    p = pyaudio.PyAudio()

    s = []
    volume = 0.5     # range [0.0, 1.0]
   
    for f in frequencies: 
        print(f)
        fs = 44100       # sampling rate, Hz, must be integer
        duration = 60/bpm * 4.0   # in seconds, may be float

        # generate samples, note conversion to float32 array
        samples = (np.sin(2*np.pi*np.arange(fs*duration)*f/fs)).astype(np.float32)
        s.append(samples)


    # for paFloat32 sample values must be in range [-1.0, 1.0]
    stream = p.open(format=pyaudio.paFloat32,
                    channels=1,
                    rate=fs,
                    output=True)
    # play. May repeat with different volume values (if done interactively) 
    for seq in s: 
        stream.write(volume*seq.astype(np.float32))

    stream.stop_stream()
    stream.close()

    p.terminate()