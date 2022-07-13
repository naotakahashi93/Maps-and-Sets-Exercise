// Quick Question #1
// What does the following code return?


const set1 = new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?

const set2 = [...new Set("referee")].join("") // 'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// Map(2) {Array(3) => true, Array(3) => false}
// {1,2,3 : true, 1,2,3 : false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => {
    const setArr = new Set (arr); 
    if (arr.length === [...setArr].length){ // compare the length of the inputted array and the set, if they are the same length then arr did not have any dupes
        return false 
    }
    else return true;
}

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(string){
const stringMap = new Map();
lowerStrArr = [...string.toLowerCase()]; // make lowercase than make that lowercased string into arr
vowels = "aeiou";

for (let letter of lowerStrArr){
    if (vowels.indexOf(letter) !== -1){ // if the iterable letter is a vowel

        if (stringMap.has(letter)){ //if the newmap has the vowel as a key 
            stringMap.set(letter, stringMap.get(letter)+1) // set the properties again by getting that vowel and adding one 
        }

        else {
            stringMap.set(letter, 1) // if it doesnt then set the valeu of the vowel letter to be 1
        }
    }

}
return stringMap;
}