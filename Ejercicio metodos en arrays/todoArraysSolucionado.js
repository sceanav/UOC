
let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
  const femaleCharacters = characters.filter(
    (character) => character.gender === "female"
  );

  const femaleCharactersName = femaleCharacters.map(
    (character) => character.name
  );

  console.log(femaleCharactersName);
};

const getSmallerPeople = () => {
  const r = characters.map((character) => ({
    ...character,
    height: character.height - 10,
  }));

  console.log("getSmallerPeople: ", r);
};

const sumaDePeso = () => {
  const r = characters.reduce(
    (sumaTotal, character) => sumaTotal + Number(character.mass),
    0
  );
  console.log("sumaDePeso: ", r);
};

const mediaDeAltura = () => {
  const media =
    characters.reduce(
      (sumaTotalDeAlturas, character) =>
        sumaTotalDeAlturas + character.height,
      0
    ) / characters.length;
  console.log("mediaDeAltura: ", media);
};

const collectByIndex = (index) => {
  const selectedCharacter = characters[index];
  collectedCharacters.push(selectedCharacter);
  //  collectedCharacters = [...collectedCharacters, selectedCharacter]
  console.log("collectByIndex", collectedCharacters);
};

const collectByName = (characterName) => {
  const selectedCharacter = characters.find(
    (character) => (character.name = characterName)
  );
  collectedCharacters.push(selectedCharacter);
  console.log("collectByName", collectedCharacters);
};

const removeByName = (characterName) => {
  collectedCharacters = collectedCharacters.filter(
    (character) => character.name !== characterName
  );
  console.log("removeByName: ", collectedCharacters);
};

const getCharacterFilms = (characterName) => {
  const selectedCharacter = characters.find(
    (character) => character.name === characterName
  );
  console.log("getCharacterFilms", selectedCharacter.films);
};

const collectByName2 = (characterName) => {
  const selectedCharacter = characters.find(
    (character) => (character.name = characterName)
  );
  const characterInCollectedCharacter2 = collectedCharacters2.find(
    (character) => character.name === characterName
  );

  if (characterInCollectedCharacter2 == null) {
    collectedCharacters2.push({ ...selectedCharacter, amount: 1 });
  } else {
    characterInCollectedCharacter2.amount =
      characterInCollectedCharacter2.amount + 1;
  }
  console.log("collectedCharacter2", collectedCharacters2);
};

const mediaAltura2 = () => {
  const media =
    collectedCharacters2.reduce(
      (sumaAlturas, character) => sumaAlturas + character.height,
      0
    ) / collectedCharacters2.length;
  console.log("media: ", media);
};

const removeByName2 = (characterName) => {
  console.log("removeByName2: ", collectedCharacters2);

  collectedCharacters2 = collectedCharacters2.filter(
    (character) => character.name !== characterName
  );
  console.log("removeByName2: ", collectedCharacters2);
};

fetch("https://swapi.py4e.com/api/people")
  .then((res) => res.json())
  .then((data) => {
    characters = data.results;
    // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
    console.log(characters);
    getWomansName();
    getSmallerPeople();
    sumaDePeso();
    mediaDeAltura();
    collectByIndex(3);
    collectByName("Leia Organa");
    removeByName("Darth Vader");
    getCharacterFilms("Leia Organa");
    collectByName2("Leia Organa");
    collectByName2("Leia Organa");
    mediaAltura2();
    removeByName2("Leia Organa");
  });

