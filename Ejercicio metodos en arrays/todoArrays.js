let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];
const getWomansName = () => {
  const r = characters
    .filter((person) => person.gender === "female")
    .map((person) => person.name);
};

const getSmallerPeople = () => {
  const r = characters.map((person) => ({...person, height: person.height - 10}) );
  console.log(r);  
};

const sumaDePeso = () => {
  const r = characters.reduce((acc, person) => acc + Number(person.mass), 0); /* mass es un string */
  console.log(r);
};  

const mediaDeAltura = () => {
  const r = characters.reduce((media, person) => media + person.height / characters.length , 0);
  console.log(r);
}

const collectByIndex = (i) => {
  collectedCharacters.push(characters[i]); 
}

const collectByname = (characterName) => {
  const selectedCharacter = characters.find( character => characterName == character.name);
  collectedCharacters.push(selectedCharacter);
}



fetch("https://swapi.py4e.com/api/people")
  .then((res) => res.json())
  .then((data) => {
    characters = data.results;
    console.log(characters);
    getWomansName();
    getSmallerPeople();
    console.log(characters);
    collectByIndex(1);
    collectByIndex(4);
    mediaDeAltura();
    sumaDePeso();
    
    console.log(collectedCharacters);    
  });
