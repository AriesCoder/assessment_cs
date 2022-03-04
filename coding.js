// Problem1: Sum Zero
let array = [28, 43, -12, 30, 4, 0, 19]

function addToZero(arr){               
    let result = false
    for(let i = 0; i < arr.length-1 && result; i++ ){  //time O(n)
        for(let j =i+1; j < arr.length; j++){    //time O(n)
            if(arr[i] + arr[j] === 0){
                result = true;
            }
        }
    }
    return result //space O(1) - return boolean
}
console.log(addToZero(array))
/*
    Time complexity is O(n^2)
    Space complaxity is O(1)
*/


// Problem2: Unique Characters                   
function checkUniqueChars(word){              
    let lowerCaseWord = word.toLowerCase()
    for(let i = 0; i < lowerCaseWord.length-1; i++){    //time O(n)
        for(let j = i+1; j < lowerCaseWord.length; j++){   //time O(n)
            if( lowerCaseWord[i] === lowerCaseWord[j]){
                return false
            }
        }
    }
    return true    //space O(1) - return boolean
}
console.log(checkUniqueChars('Hello'))
/*
    time complexity is O(n^2)
    space complexity is O1
*/


// Problem3: Pangram Sentence
let string = "The quick brown fox jumps over the lazy dog!"
 function isPangram(str){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let count = 0
    for(let i = 0; i < alphabet.length; i++){   //time O(1)
        for(let j = 0; j < str.length; j++){   //time O(n)
            if(alphabet[i] === str[j]){
                count ++
                break
            }
        }
    }
    if(count === alphabet.length){
        return true
    }else{
        return false  //space O(1) - return a boolean
    }
 }
console.log("Pangram", isPangram(string))
/*
    Time complexity is O(n)
    Space complexity is O(1)
*/


// 4/ Longest word

function findLongestWord(arr){               
    let longestWord = 0
    for(let i = 0; i < arr.length; i++){   //time O(n)
        let wordLength = arr[i].length
        if(wordLength > longestWord){
            longestWord = wordLength
        }
    }
    console.log(longestWord)  // space: O(1) - return a number

}
findLongestWord(["hi", "hello"])
/*
    Time complexity is O(n)
    Space complexity is O(1)
*/




    