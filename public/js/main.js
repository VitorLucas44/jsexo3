let phrase = "Bonjour tout le monde         "
console.log(`${phrase} ${phrase.length}`)
console.log(phrase.trim());
console.log(`${phrase} ${phrase.length}`)
console.log(phrase.substr(20));
const words = phrase.split(' ');
console.log(words[0]);+
console.log(phrase.replace('Bonjour', 'String'));
console.log(phrase.toLocaleUpperCase(5))
console.log(phrase.indexOf(1))
let nom = "votre nom"
console.log(nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase() + nom.charAt(8).toUpperCase())