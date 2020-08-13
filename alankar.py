import pandas as pd
import numpy as np
import sys

numf = {0: "S", 1: "r", 2: "R", 3: "g", 4: "G", 5: "m", 6: "M", 7: "P", 8: "d", 9: "D", 10: "n", 11: "N"}
numb = {v: k for k, v in numf.items()}
eq = {"r": "R", "R":"r", "G":"g", "g":"G", "m":"M", "M":"m", "D":"d", "d":"D", "n":"N", "N":"n", "S": "S", "P": "P"}
valid = {"S", "r", "R", "g", "G", "m", "M", "P", "d", "D", "n", "N"}

r2 = pd.read_csv("raag4.csv")


def alankar(raag, n): 
    
    rr = r2[r2["Raag"] == raag]
    
    if len(rr) == 0: 
        print("Raag " + raag + " not found. ")
        return (-1, -1, -1)
        
    aaa = list(rr["Aaroha"])[0]
    aav = list(rr["Avroha"])[0]

    if type(aaa) != str or type(aav) != str: 
        print("Raag " + raag + " does not have a valid aaroha/avroha required to present the alankar. The aaroha and avroha are presented below.")
        return(aaa, aav, 0)      
    
    aa = []
    av = []
    
    for i in aaa: 
        if i in valid: 
            aa.append(i)
    
    for i in aav: 
        if i in valid: 
            av.append(i)


            
            
    noteset = set()
    for i in aa: 
        noteset.add(numb[i])
    for i in av: 
        noteset.add(numb[i])
    
    noteset = sorted(list(noteset))
    noteset = [numf[i] for i in noteset]
    
    anod = {}
    dnod = {}
    
    for i in range(len(noteset)):
        anod[noteset[i]] = set()
 
    for i in range(len(noteset)):
        dnod[noteset[i]] = set()
    
    for i in range(len(aa) - 1): 
        anod[aa[i]].add(aa[i+1])
            
    for i in range(len(av) - 1): 
        dnod[av[i]].add(av[i+1])
        
    for i in range(len(noteset) - 1): 
        if noteset[i] in aa[:-1] and noteset[i].lower() != noteset[i+1].lower(): 
            anod[noteset[i]].add(noteset[i+1])
            if eq[noteset[i+1]] in noteset: 
                anod[noteset[i]].add(eq[noteset[i+1]])
    if noteset[-1] in aa[:-1]: 
        anod[noteset[-1]].add(noteset[0])

    for i in range(len(noteset) - 1, 0, -1): 
        if noteset[i] in av[:-1] and noteset[i].lower() != noteset[i-1].lower(): 
            dnod[noteset[i]].add(noteset[i-1])
            if eq[noteset[i-1]] in noteset: 
                dnod[noteset[i]].add(eq[noteset[i-1]])
    if noteset[0] in av[:-1]: 
        dnod[noteset[0]].add(noteset[-1])
    
    
    #print(anod, dnod)
            


    asc = []
    desc = []
    
    if n >= len(aa): 
        asc = [["".join(aa)]]
    else: 
        for i in range(len(aa) - n+1): 
            currents = [aa[i]]

            for j in range(n-1): 
                cv = []
                for k in currents: 
                    nxt = anod[k[-1]]
                    if len(nxt) > 0: 
                        for q in nxt: 
                            cv.append(k + q)
                currents = cv

            cv = []

            if i == len(aa) - n: 
                for opt in currents: 
                    k = opt[-1]
                    if k == aa[-1]: 
                        cv.append(opt)
            else: 
                nxt = aa[i+1]
                for opt in currents: 
                    k = opt[-1]
                    if numb[nxt] <= numb[k] or n == 1:
                        cv.append(opt)

            asc.append(cv)
    
    if n >= len(av): 
        desc = [["".join(av)]]
    else: 
        for i in range(len(av) - n+1): 
            currents = [av[i]]

            for j in range(n-1): 
                cv = []
                for k in currents: 
                    nxt = dnod[k[-1]]
                    if len(nxt) > 0: 
                        for q in nxt: 
                            cv.append(k + q)
                currents = cv

            cv = []

            if i == len(av) - n: 
                for opt in currents: 
                    k = opt[-1]
                    if k == av[-1]: 
                        cv.append(opt)
            else: 
                nxt = av[i+1]
                for opt in currents: 
                    k = opt[-1]
                    if numb[nxt] >= numb[k] or n == 1:
                        if nxt.lower() == "n" and k.lower() in ["s"]:
                            if nxt in dnod[k] or nxt == k:
                                cv.append(opt)
                        elif nxt == k or nxt.lower() != k.lower(): 
                            cv.append(opt)

            desc.append(cv)
    
    print(shuffle(asc), shuffle(desc))   
    return(shuffle(asc), shuffle(desc), 1)

def shuffle(nl): 
    
    def shuffle_help(nl, so_far): 
        if len(nl) == 0: 
            return so_far

        sf = []
        for opt in so_far: 
            for to in nl[0]: 
                sf.append(opt + [to])
        return shuffle_help(nl[1:], sf)

    return shuffle_help(nl, [[]])

if __name__== "__main__": 
    alankar(sys.argv[1], int(sys.argv[2]))

