/** string methods
 * concat() combine strings
 * startsWith() bolean // compare beginning of string
 * endsWith() bolean // compares ending of string
 * includes() boleeam // search for especific string no matter position
 * indexOf() number // search position where string is/starts
 * lastIndexOf() number // search last position where string is/starts
 *
 * padStart() it grows the string to the number of position we declare, with the value we declare .padStarts(nposition , xvalues)
 * PadEnd() same at the end of the string
 * both of previous are not official and are not commonly used
 * repeat() it repeats the string ntimes we declare // string.repeat(n)
 *
 * split() divides the string as we declare. most common use, split letter or words.
 * substring() it cuts and converts a new string including the index we declare it starts from, to the index excluding the one we declare it ends.
 * toLowerCase() converts string to lower case
 * toUpperCase() converts string to upper case
 * toString() converts non-string values to string values
 * trim() elimate spaces and lines of a string
 * trimEnd() eliminate spaces and lines from ending of a string
 * trimStart() elinate spaces and lines from the beginning of a string
 * valueOf() Returns the primitive value of the specified object.
 */

// [] used for indexes

/**array methods
 * pop() cuts out and display the last element of the arr
 * shift() cuts out and display the first element of the arr
 * push() number // it adds new elements to the array, also display n number of the array after thay are added
 * reverse() reverse order of the array
 * unshift() add one or more elements to the beginning of the array; returns the new value lenght of the array
 * sort() organize elements of an array locally, and returns the new organized array. (organize alphabetic &/| numeric)
 * splice() Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.(start,amounttodelete,addnew )
 * _____ACCESSORIES_____
 * join() Adds all the elements of an array into a string, separated by the specified separator string.
 * slice()Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
 * metodos ya vistos en string..... toString(), indexOf(), lastIndexOf(), includes()
 * _______LOOPS______
 * filter() Returns the elements of an array that meet the condition specified in a callback function. we loop through each element and can condition before declare an action
 * foreach()Performs the specified action for each element in an array. we loop through the elements and declare an action after each loop
 */

const arr = [1, 2, 3, 4, 5]

console.log(array);
console.log(arr);