

function countLetters (string) {
var instances = {};
string = string.replace(/\s/g,'').split('')
for (var i = 0; i < string.length; i++) {
var char = string[i];
  if (instances[char]) {
    instances[char] += 1
  } else {
    instances[char] = 1
    }
  }
return instances;
}

console.log(countLetters('lighthouse in the house'));

