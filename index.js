const states = [
  {
    "code": "FC",
    "name": "Abuja",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "Benue-Plateau, North-Central, and North-Western States"
  },
  {
    "code": "AB",
    "name": "Abia",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Imo State"
  },
  {
    "code": "AD",
    "name": "Adamawa",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Gongola State"
  },
  {
    "code": "AK",
    "name": "AkwaIbom",
    "Date of creation": "23 September 1987",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Cross River State"
  },
  {
    "code": "AN",
    "name": "Anambra",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "(old) Anambra State"
  },
  {
    "code": "BA",
    "name": "Bauchi",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "North-Eastern State"
  },
  {
    "code": "BY",
    "name": "Bayelsa",
    "Date of creation": "	1 October 1996",
    "creator": "Gen. Sani Abacha",
    "Preceding Entity": "Rivers State"
  },
  {
    "code": "BE",
    "name": "Benue",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "Benue-Plateau State"
  },
  {
    "code": "BO",
    "name": "Borno",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "North-Eastern State"
  },
  {
    "code": "CR",
    "name": "CrossRiver",
    "Date of creation": "27 May 1967",
    "creator": "Gen. Yakubu Gowon",
    "Preceding Entity": "Eastern Region; known as South-Eastern State from 1967 to 1976"
  },
  {
    "code": "DE",
    "name": "Delta",
    "Date of creation": "	27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Bendel State"
  },
  {
    "code": "EB",
    "name": "Ebonyi",
    "Date of creation": "1 October 1996",
    "creator": "Gen. Sani Abacha",
    "Preceding Entity": "Enugu State and Abia State"
  },
  {
    "code": "ED",
    "name": "Edo",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Bendel State"
  },
  {
    "code": "EK",
    "name": "Ekiti",
    "Date of creation": "1 October 1996",
    "creator": "Gen. Sani Abacha",
    "Preceding Entity": "Ondo State"
  },
  {
    "code": "EN",
    "name": "Enugu",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "(old) Anambra State"
  },
  {
    "code": "GO",
    "name": "Gombe",
    "Date of creation": "1 October 1996",
    "creator": "Gen. Sani Abacha",
    "Preceding Entity": "Bauchi State"
  },
  {
    "code": "IM",
    "name": "Imo",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "East Central State"
  },
  {
    "code": "JI",
    "name": "Jigawa",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Kano State"
  },
  {
    "code": "KD",
    "name": "Kaduna",
    "Date of creation": "27 May 1967",
    "creator": "Gen. Yakubu Gowon",
    "Preceding Entity": "Northern Region; known as North-Central State from 1967 to 1976"
  },
  {
    "code": "KN",
    "name": "Kano",
    "Date of creation": "27 May 1967",
    "creator": "Gen. Yakubu Gowon",
    "Preceding Entity": "Northern Region"
  },
  {
    "code": "KT",
    "name": "Katsina",
    "Date of creation": "23 September 1987",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Kaduna State"
  },
  {
    "code": "KE",
    "name": "Kebbi",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Sokoto State"
  },
  {
    "code": "KO",
    "name": "Kogi",
    "Date of creation": "	27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Kwara State; Benue State"
  },
  {
    "code": "KW",
    "name": "Kwara",
    "Date of creation": "27 May 1967",
    "creator": "Gen. Yakubu Gowon",
    "Preceding Entity": "Northern Region; known as West Central State from 1967 to 1976"
  },
  {
    "code": "LA",
    "name": "Lagos",
    "Date of creation": "27 May 1967",
    "creator": "Gen. Yakubu Gowon",
    "Preceding Entity": "Federal Territory of Lagos and Colony Province"
  },
  {
    "code": "NA",
    "name": "Nassarawa",
    "Date of creation": "1 October 1996",
    "creator": "Gen. Sani Abacha",
    "Preceding Entity": "Plateau State"
  },
  {
    "code": "NI",
    "name": "Niger",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "North-Western State"
  },
  {
    "code": "OG",
    "name": "Ogun",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "Western State"
  },
  {
    "code": "ON",
    "name": "Ondo",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "Western State"
  },
  {
    "code": "OS",
    "name": "Osun",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Oyo State"
  },
  {
    "code": "OY",
    "name": "Oyo",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "Western State"
  },
  {
    "code": "PL",
    "name": "Plateau",
    "Date of creation": "	3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "Benue-Plateau State"
  },
  {
    "code": "RI",
    "name": "Rivers",
    "Date of creation": "27 May 1967",
    "creator": "Gen. Yakubu Gowon",
    "Preceding Entity": "Eastern Region"
  },
  {
    "code": "SO",
    "name": "Sokoto",
    "Date of creation": "3 February 1976",
    "creator": "Gen. Murtala Muhammed",
    "Preceding Entity": "North-Western State"
  },
  {
    "code": "TA",
    "name": "Taraba",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Gongola State"
  },
  {
    "code": "YO",
    "name": "Yobe",
    "Date of creation": "27 August 1991",
    "creator": "Gen. Ibrahim Babangida",
    "Preceding Entity": "Borno State"
  },
  {
    "code": "ZA",
    "name": "Zamfara",
    "Date of creation": "1 October 1996",
    "creator": "Gen. Sani Abacha",
    "Preceding Entity": "Sokoto State"
  }
];

const states_items = document.getElementById("states-items");

for(let i = 0; i < states.length; i++){
  const populated_states_item = `
  <tr>
    <td>${states[i].code}</td>
    <td>${states[i].name}</td>
    <td>${states[i]["Date of creation"]}</td>
    <td>${states[i].creator}</td>
    <td>${states[i]["Preceding Entity"]}</td>
  </tr>
  `;
  states_items.innerHTML += populated_states_item;
}