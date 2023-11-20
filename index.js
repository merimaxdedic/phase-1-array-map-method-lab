function titleCased() {
  const tutorialNames = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?"
  ];

  const titleCasedNames = tutorialNames.map(tutorialName => {
    const words = tutorialName.split(" ");
    const capitalizedWords = words.map(word => {
      const capitalizedFirstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1);
      return capitalizedFirstLetter + restOfWord;
    });
    return capitalizedWords.join(" ");
  });

  return titleCasedNames;
}

console.log(titleCased());
