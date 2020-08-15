# Hindustani Music - Raag *Alankar* Generation

This is the code base used to generate *alankars* in Hindustani classical music based on rules of individual *raags*, or modes, of music. The live website is available at [alankargen.herokuapp.com](alankargen.herokuapp.com) and should be usable through any device with a modern browser. 

Style sheet and autocomplete script credits should go to [W3 Schools](w3schools.com), and the Javascript for the sound generation is a variation of some excellent work from [Elliott Alexander](github.com/escottalexander). This application is made with Flask and Heroku, and is written primarily in Python. 

----

Hindustani music differs from its Western counterpart primarily through its emphasis on melody, as opposed to harmony. As a result, artists and novice practitioners alike spend far more time on individual voice development, since the music is usually performed solo. More emphasis is placed on ornamentation, flexibility, and agility of the voice, whereas a western vocalist - especially a choir singer - may spend more time on blending and matching her voice to another singer from another part. 

Because of this difference, practice (*riyaz*) frequently involves the singing of involved and complex scales derived off of the *raag* that the artist is currently practicing. These complex scales are collectively known as *alankars*, and are in totality beyond the scope of a simple web application. However, the most algorithmic of them can and have been calculated, and an example for the reader is provided below. 

---
The *raag* **Yaman**, like all *raags*, has a unique known ascending scale (*aaroha*) and descending scale (*avroha*). In any specified key, this scale is: 

    ascending:  Ti-Re-Mi-Fi-La-Ti-Do
    descending: Do-Ti-La-So-Fi-Mi-Re-Do

In the key of C, this would be: 

    ascending:  B-D-E-F#-A-B-C
    descending: C-B-A-G-F#-E-D-C

Notice how the scale starts on the leading tone Ti underneath the normal Do (B, instead of C in the key of C). This is common in certain families, or *thaats*, of *raags*. 

Hindustani music has a solfege notation similar to the one known in western music, defined as *Sa, Re, Ga, Ma, Pa, Dha*, and *Ni* for Do, Re, Mi, Fa, So, La, and Ti, respectively. Different syllables are not used for sharps and flats, but it is common in modern times for capitalization to be used to reflect sharps and flats in writing. In order to obtain all twelve semitones, Hindustani music rules stipulate that *Sa* and *Pa* do not ever change, *Re, Ga, Dha,* and *Ni* can be flat, or *komal*, and *Ma* can be sharp, or *tivra*. Most commonly, only the first letter of the solfege syllable is used, where capitals refer to natural (*shuddha*) *Re, Ga, Dha, Ni*, and *tivra* *Ma*, and lowercase letters refer to *komal Re, Ga, Dha, Ni* and *shuddha* *Ma*. Using these rules, **Yaman** has an ascending and descending scale of: 

    aaroha: NRGMDNS
    avroha: SNDPMGRS

An *alankar* in its simplest form is a permutation of the ascending and descending scales in groupings, starting off of every note in the scale. For example, an *alankar* of length 3 for **Yaman** would be: 

    Alankar 3 for Yaman
    aaroha: NRG RGM GMD MDN DNS
    avroha: SND NDP DPM PMG MGR GRS
    
    ascending:  B-D-E D-E-F# E-F#-A F#-A-B A-B-C
    descending: C-B-A B-A-G A-G-F# G-F#-E F#-E-D E-D-C

Notice how each pairing in the ascending *alankar* starts with a successive note of the ascending scale: **N**RG **R**GM **G**MD **M**DN **D**N**S** - when the final note of the ascending scale is reached, the *alankar* ends. The same is true in the descending scale: **S**ND **N**DP **D**PM **P**MG **M**GR **G**R**S**. 

*Alankars* can be made of any length, following the same rules, however after the length of the scale itself is reached the process becomes moot. When performed at high speeds (as eighth notes upwards of 225 BPM), these melodies can be spectacular to listen to, as complex mixtures of step-wise and leaping intervals are woven together to make the *alankar*. At their highest quality, they can even be used in rhythm in top-level performances. 

The code base calculates and plays *alankars* for hundreds of *raags*, and also takes into account variations that are beyond the scope of this explanation. *It is not perfect, and should not be taken at face value above the teachings of a Hindustani guru.* The other *alankars* for **Yaman** following the above rules are provided below for reference. 


    Length 1
    aaroha: N R G M D N S
    avroha: S N D P M G R S
    
    Length 2
    aaroha: NR RG GM MD DN NS
    avroha: SN ND DP PM MG GR RS
    
    Length 3
    aaroha: NRG RGM GMD MDN DNS
    avroha: SND NDP DPM PMG MGR GRS
    
    Length 4
    aaroha: NRGM RGMD GMDN MDNS
    avroha: SNDP NDPM DPMG PMGR MGRS
    
    Length 5
    aaroha: NRGMD RGMDN GMDNS
    avroha: SNDPM NDPMG DPMGR PMGRS
    
    Length 6
    aaroha: NRGMDN RGMDNS
    avroha: SNDPMG NDPMGR DPMGRS
    
    Length 7
    aaroha: NRGMDNS
    avroha: SNDPMGR NDPMGRS


    