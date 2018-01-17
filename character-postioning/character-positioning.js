function countLetters (string) {
var instances = {};
string = string.split('')
for (var i = 0; i < string.length; i++) {
var char = string[i];
  if (instances[char]) {
    instances[char].push(i)
  } else {
    instances[char] = [i];
    }
  }
return instances;
}

console.log(countLetters('lighthouse in the house'));

