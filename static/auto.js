var raags = ['Bhairav, Bhavmat', 'Bilawal, Yamani', 'Kalyan, Chandra', 'Jaunkali', 'Kakambheri', 'Bilawal, Alhaiya', 'Deskar', 'Ranjani, Kamal', 'Kolahal', 'Bilawal, Shuddha', 'Hindol, Ajad', 'Bhairav, Bairagi', 'Asa / Asa Maand / Aarabhi', 'Bhatiyar, Lalit', 'Manohari, Kamal', 'Desh Gaud', 'Kalyan, Anjani', 'Sorath', 'Basant, Gopika', 'Malayamarutam', 'Triveni', 'Bhairav, Rati', 'Bhairav, Beehad', 'Todi, Bahaduri', 'Gunakali, Utari', 'Bilawal, Devgiri', 'Patmanjiri (Bilawal Thaat Ki)', 'Gunakali (Madhyam Varjit)', 'Bilawal, Kukubh', 'Bilawal, Sarparda', 'Lalit Mangal', 'Bhairav', 'Bibhas (Bhairav Ang)', 'Gunakari', 'Bhairav, Bangal', 'Gandhakriya', 'Manjiri, Hauns', 'Bagkauns', 'Bhairav, Ahir', 'Bhairav, Kaushi', 'Bhairav, Prabhaat / Prabhaati', 'Bhairav, Sourashtra', 'Ranjani, Dev', 'Jogiya', 'Bhairav, Kabir', 'Bhairav, Hijaj', 'Araj', 'Sourashtra Tank', 'Bhairav, Udasi', 'Ranjani, Mano / Manoranjani', 'Bhairav, Bhatiyari', 'Gaul', 'Ahiri / Ahiri Todi', 'Bahar, Bhairav', 'Malani', 'Basant, Gambhir', 'Sakh, Lachchha', 'Sakh, Bhav', 'Ras Chandra', 'Bilawal, Shukla', 'Lalit Pancham', 'Todi, Laxmi', 'Bhairav, Anand', 'Parameshwari', 'Suranjani', 'Ahir Lalat / Ahir Lalit', 'Shobhavari', 'Bhairav, Nat', 'Ramkali', 'Bhairav, Mangal', 'Bhairav, Saveri / Saveri', 'Prabhavati', 'Bhairav, Nand or Anand Bhairav (as in Agra Gharana)', 'Bhairav, Anand (Sende Khan Tradition)', 'Bhairav, Shivmat', 'Bhairavi', 'Todi, Jaiwanti', 'Todi, Bairagi', 'Bilawal, Hameer', 'Bilawal, Bangal', 'Malhar, Des', 'Revati', 'Kalyan, Kohari', 'Todi, Asa', 'Anand Leela', 'Pratiksha', 'Todi, Hussaini', 'Ranjani, Yash', 'Todi, Gauri', 'Dev Gandhar', 'Gandhari', 'Jaunpuri', 'Manjiri, Rudra', 'Bhairavi, Adi', 'Zilaf, Bhairav Ang Ka', 'Asavari, Komal Rishabh / Komal Asavari', 'Todi, Bhupal / Bhoopal Todi', 'Todi, Bilaskhani', 'Todi, Asavari', 'Bilahari', 'Hindol, Marg', 'Todi, Saheli', 'Malavi, Subah Ki (Marawa Thaat)', 'Barari / Varati', 'Bahar, Hindol', 'Naat Kuranjika', 'Bilawal, Sukhiya / Sawani Bilawal', 'Shankara Karan', 'Shankara Baran', 'Shankara Aran', 'Sarang, Madhamaad / Madhyamaadi Sarang / Madhamat Sarang', 'Sarang, Miyan Ki / Tanseni Sarang / Vrindavani Malhar', 'Rakta Hauns', 'Sarang, Jaywant', 'Bilawal, Jaij', 'Khokhar', 'Sakh, Dev', 'Todi, Lachari', 'Asavari, Jogi', 'Gunakali (Nishad Varjit)', 'Barwa', 'Marwa / Marava', 'Kalyan, Puriya', 'Todi, Dev Gandhari', 'Asavari, Sindhura', 'Chandrika, Uday', 'Prabha, Kumud', 'Desi', 'Kalyan, Shubh', 'Gyankali', 'Bilawal, Nat', 'Maand, Asa', 'Manohari, Amba', 'Malagunji', 'Todi, Ahiri', 'Ram Priya', 'Asavari', 'Khat', 'Abheri', 'Desi, Komal', 'Varali, Salag / Salag Varali', 'Todi, Anjani', 'Basant Mukhari / Komal Bhairav', 'Charukeshi', 'Kalyan, Sawani', 'Bhairavi, Nat', 'Des Jogi', 'Bhairav, Jaun / Jaun Bhairav', 'Shankara Sharan', 'Kripavati', 'Sameri', 'Sarang, Gaud', 'Din Ki Puriya', 'Patdipaki', 'Madhsurja', 'Mohini, Chitta', 'Sarang, Lankadahan', 'Sarang, Shuddha', 'Sarang, Vrindavani', 'Sarang, Saraswati', 'Sarang, Badhans', 'Sarang, Samant', 'Bhim', 'Patmanjiri (Kafi Thaat Ki)', 'Kamodvanti', 'Sarang, Shuddha (Do Nishad Ka)', 'Vijay Nagari', 'Bahar, Jaun / Gandhari Bahar', 'Dhakkaa / Komal Bhimapalasi', 'Pradeepki', 'Basant, Dakshinatya', 'Dhanashree (Bhairavi Ang)', 'Haunskinkini', 'Chandrika, Udan', 'Madhuvanti', 'Desi, Shuddha', 'Basant, Hamiri', 'Shree', 'Kalyan, Purwa', 'Maru', 'Sanjaari', 'Zilaf', 'Bihag, Maru / Maaru Bihag', 'Puriya Dhanashree', 'Saanjh / Sanz / Saanjh Ka Hindol', 'Vihang', 'Poorvi', 'Latika', 'Manohar', 'Gauri, Kabiri / Khapar Gauri / Raamaanandi Gauri', 'Puriya', 'Ratnadeep', 'Gavati', 'Haunsnad', 'Pradeepaki (with both Madhyam & Dhaivat)', 'Bhimpalasi', 'Dhanashree', 'Ranjani, Madhu / Madhuranjani', 'Patdeep', 'Pilu', 'Kolhaas', 'Tukhari', 'Maligaura', 'Gauri, Shree or Gauri, Ram', 'Purvaa / Poorbaa', 'Reva', 'Simhendra Madhyam', 'Barwa, Chaiti', 'Palasi', 'Bhoop / Bhup / Bhupali', 'Kalyan, Shuddha', 'Kalyan, Kesari', 'Kala Bharan', 'Deepak', 'Nindiyaari', 'Todi, Abheri', 'Deskar, Marwa Ang Ka', 'Lalitavari', 'Rajeshwari', 'Bihag, Mishra', 'Kalyan, Yaman', 'Yaman', 'Chandrakant', 'Kalyan, Jaimini', 'Khamaj', 'Tilang', 'Malavi', 'Malin', 'Sazgiri', 'Kalyan, Shyam', 'Kalyan, Lakshmi', 'Jaijaiwanti (Des Ang)', 'Tanki', 'Gauri, Bhatiyari', 'Kalyan, Hem', 'Pahadi', 'Dhanashree', 'Kanada, Gara', 'Kalyan, Durga', 'Kedar, Nat', 'Manjiri Malav / Maalaw Manjari', 'Kumudvati', 'Janasammohini', 'Tilak Kamod', 'Kalyan, Shree', 'Sarang, Poorvi', 'Dhanabasanti', 'Koumari', 'Kalyan, Priya', 'Bahar, Sindhu', 'Kafi', 'Haunsdhwani / Hansadhvani / Hamsadhvani', 'Kamod', 'Malarani', 'Kalyan, Chhaya', 'Kalyan, Bhup / Audav Shudhha Kalyan', 'Ranjani, Gou', 'Saraswati', 'Gauri', 'Kedar, Jaldhar', 'Chandrika, Uday Ravi', 'Kanada, Suha', 'Kapi', 'Kedar, Maluha', 'Champak', 'Pancham', 'Gauri, Lalita', 'Kedar, Basanti', 'Motaki', 'Kanada, Sughrai', 'Kanada, Suha Sughrai', 'Kanada, Raisa', 'Amrit Varshini', 'Malashree', 'Shuddha Shyam', 'Ranjani, Kusum', 'Shankar, Gauri', 'Vihangini', 'Barari, Shuddha', 'Gauri', 'Shreetank', 'Sohani, Basant / Basant Sohini', 'Sohani / Sohini', 'Basant, Gauri', 'Bibhas (Marwa Ang Ka / Sampoorna Bibhas)', 'Purvaa, Sampoorna / Sampurna Poorba', 'Rasikpriya', 'Vijay', 'Kalyan, Jait', 'Kedar, Deepak / Shyam Kedar', 'Maand', 'Jait', 'Dhavalshree', 'Todi, Chhaya', 'Harikauns', 'Kalyan, Samant', 'Bhoop, Chaiti / Chaiti Bhup', 'Kamboji', 'Dhanashree, Multani', 'Malavatee', 'Hameer', 'Ranjani, Jan', 'Aarabhi', 'Kalyan, Gorakh', 'Rajrajeshwari', 'Jogeshwari', 'Bihag', 'Bihagda', 'Shankara', 'Bihagaro, Maalav', 'Bihag, Chandani', 'Nat, Sawani', 'Bihagda, EK Nishad Ka', 'Kamboji, Gop', 'Kalyan, Raj', 'Viranch Mukhi', 'Kumudaki', 'Bihag, Marg / Maarg Bihag', 'Kalyan, Khem', 'Jhinjhoti', 'Ravikosh', 'Lagan Gandhaar', 'Mohini, Ahi', 'Maghavaa', 'Deepak', 'Kanada, Darbari', 'Nilambari', 'Kohal', 'Pushp', 'Chaya Nata / Chhayanat', 'Desh / Des', 'Jaijaiwanti (Bageshree Ang)', 'Varali, Karank', 'Desaa, Sorath', 'Kalyan, Rajani', 'Khemnat', 'Panchmanjiri', 'Hem Nat', 'Maanjh, Pilu Ki', 'Sakh, Dev', 'Nand / Anandi / Anandi Kalyan', 'Shyamalee', 'Kalawati', 'Khambavati', 'Rahi', 'Kamod, Nat', 'Ranjani, Saraswat', 'Tilak Shyam', 'Bihari', 'Bahar, Kanada', 'Bhinna Shadja', 'Chakradhar', 'Durga', 'Hemant', 'Nat, Shuddha', 'Desaa, Jaldhar', 'Nat', 'Sureshwari', 'Varali, Pratap', 'Malati / Shuddha Nishad Rageshree', 'Abhogi / Abhogi Kanada', 'Bahar, Bageshree', 'Kanada, Bageshree', 'Kanada, Nayaki', 'Bageshree, Audav (Bageshree Kauns or Purana Chandrakauns)', 'Chandranandan', 'Jaikauns', 'Ranjani, Raag', 'Sampoorna Bageshree / Pancham Bagesshree', 'Bahar, Shuddha', 'Kedar', 'Kedar, Chandni', 'Kedar, Shiv', 'KedarNanda or Anandi Kedar or Nand Kedar', 'Bahar, Kedar', 'Malhar, Nat', 'Rageshree', 'Bahar, Rageshree', 'Rupeshwari / Khamaj Thaat Ki Durga', 'Saravali, Naag', 'Kaamaai', 'Varali, Kantal', 'Lankeshree', 'Kanta, Udan', 'Kaamkesh', 'Desaa, Sawan', 'Saajan', 'Rageshree (Do Nishad Ki)', 'Durga (Khamaj Thaat Ki)', 'Uma Tilak', 'Bahar, Khamaj', 'Chandraprabha', 'Shreevanti', 'Bihag, Pat', 'Bihag, Sawani', 'Sawani', 'Nat, Bhup / Bhoop Nat', 'Nat Narayan', 'Dagori / Daguri / Deepaki / Anaamikaa', 'Kanada, Gunji', 'Kanada, Shahana', 'Malhar, Jayant', 'Deshakhya', 'Khem', 'Bihag, Nat', 'Narayani', 'Shree, Hauns', 'Bihag, Tilak / Tilak-Bihag', 'Hemvanti', 'Kanada, Hussaini', 'Madhukauns', 'Vachaspati or Champakali', 'Bihag, Maalav', 'Harapriyaa', 'Homshikha', 'Abhogi, Shiv', 'Ranjani, Pushp', 'Malhar, Kanada', 'Kanada, Mudriki', 'Kanada, Jayant', 'Nupur', 'Jungala', 'Kanada, Kaunsi (Nayaki Ang)', 'Manjiri', 'Todi, Miyan Ki', 'Basanti, Jaldhar', 'Kauns, Maru / Amirkhani Kauns / Ameeri Kauns', 'Adana', 'Paraj', 'Basant Pancham', 'Basant Bahar / Bahar, Basant', 'Daulati', 'Chandrakauns', 'Jogkauns', 'Kanada, Kaunsi', 'Malkauns', 'Malkauns, Pancham', 'Malkauns, Sampoorna', 'Chandrakauns (Bhairavi Ang or  Agra Gharane Ka) / Daras Kauns', 'Kaunsi', 'Malav', 'Jairaj', 'Bhavani', 'Ranjani, Ras', 'Swanandi', 'Bageshree', 'Bahar', 'Jog', 'Ranjani, Shree', 'Basant, Kanak', 'Bahar, Bhavani', 'Bahar, Anandi', 'Bahar, Gaud / Gaudi Bahar', 'Bahar, Jog / Jog Bahar', 'Bahar, Shahana / Shahana Bahar', 'Jogeshvaree', 'Kedar, Sangam', 'Madhuri', 'Ranjani, Kaushik', 'Neelkauns', 'Kauns, Surya', 'Kanada', 'Bhairavi, Anand', 'Bahar, Adana / Adana Bahar', 'Chandrika', 'Lajwanti', 'Kanada, Kafi', 'Ranjani, Shiv / Shivaranjani', 'Sindhura, Chhaya', 'Bahar, Hamiri / Hamir Bahar', 'Todi, Darbari', 'Basant, Maru', 'Kanada, Kaunsi (Bageshree Ang)', 'Khamaj, Manjh', 'Jayant', 'Mevada', 'Hindol', 'Hindol, Sampoorna', 'Ranjani, Kaam', 'Jaiwanti', 'Todi, Gujari', 'Sohani Pancham', 'Basant, Malati', 'Bibhas (Deskar Ang)', 'Girija / Audav Bhairav / Kauns Gandhar', 'Bahar, Paraj', 'Basant / Vasant / Wasant', 'Bhairav, Paraj / Paraji Bhairav / Sundar Kali', 'Dhanya Dhaivat', 'Hevitri', 'Ranjani, Megh', 'Lalitkali', 'Bageshree, Komal', 'Deepawali / Dipavali', 'Sampoorna Pancham', 'Basant, Aadi / Adi Basant', 'Lalit / Lalat', 'Lalit Pancham (Komal Dhaivat Ka)', 'Ranjani, Guna', 'Bhankar', 'Kalingda', 'Kalyan, Krishna', 'Bhatiyar', 'Lalit, Shuddha Dhaiwat', 'Dhani', 'Malhar, Miyan', 'Malhar, Meera', 'Megh', 'Malhar, Megh', 'Sawan', 'Malhar, Gandhi', 'Sindhura', 'Malhar, Sur / Soordasi Malhar', 'Malhar, Ramdasi', 'Malhar, Charju Ki', 'Malhar, Gaud (Komal Gandhar Ka)', 'Kedar, Sawani', 'Malhar, Gaud', 'Malhar, Gaud (Khamaj Ang Ka)', 'Malhar, Gaud (Gandhar Varjit)', 'Malhar, Dhulia', 'Multani', 'Jaitshree', 'Kirwani', 'Malhar, Nanak', 'Patmanjiri (Bhairav)', 'Patmanjiri (Kalyan)', 'Kafi, Sindhura', 'Maand, Chaiti', 'Gara, Maand', 'Sindhura, Jhinjhoti', 'Bhatiyar, Shiv', 'Kalyan, Utaraa', 'Jhinjhoti Mishravanti', 'Patmanjiri (Bhatiyaar)', 'Mixed (RagaMala / RagaSagar / Mishra Rachana)', 'Jhilla or Jilla', 'Mangal Gujari', 'Kalyan, Mishra', 'Malhar, Shuddha', 'Bhairavi, Sindh', 'Gara', 'Hemavati', 'Kafi, Zilla', 'Kanakanagi', 'Varali, Viyog', 'Sarangkauns', 'Nandeshwari', 'Shyamvanti', 'Kedar, Durga', 'Bahar, Jogiya', 'Milan Gandhar']

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}