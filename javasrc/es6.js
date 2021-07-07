//let vs const vs var
//var is a function scope

//let is a blockscope eg:i
/*function sum (a,b)
{
    var c =4; //proved var is function scope
    console.log(c);
    if(true)
    {
        //var c =4; proved var is function scope
        let d = 0; //proved let is block scope
        //c = 7;
        console.log(c);
        
    }
    console.log(c);
    return a + b;
}
console.log(sum(4,5));
*/

// Template literals (template strings): backtick
//console.log(`5 + 5 = ${5+5}`);


//default parameter: in function allow named parameter to be initialized with default values if no or undefined is 
/*function sum ( a, b = 4)
{
    return a  + b;
}
console.log(sum(3,5));
*/


// Fat arrow function
/*const sum = (a,b) =>
{
    return ` a + b = ${a +b}` ;
}
console.log(sum(3,5));
*/

//Arrays 
//var arrname = new Array;
var arrname = [1,3,4,];
//console.log(arrname.length);

// For in Loop: gives the index no of the array
//for(let elements in arrname)
//    console.log(elements);

// For of Loop: gives the element of the array
//for(let elements of arrname)
//    console.log(elements);


// Index of 1st argument element to search, 2nd argument from where you want to start search(): return -1 if element is not matched
//console.log(arrname.indexOf(0));
//console.log(arrname.indexOf(4,3));

// lastindexof: same as index of exept it start searchs from backword.
// arrname.include(): returns true or false.
// arrname.find(): return only one element of array which is matched the condition
//const arrele = arrname.find((elem) => {
//    return elem > 2;
//})
//console.log(arrele);
// arrname.filter(): return all element of array in new array which is matched the condition 
//const arrele = arrname.filter((elem) => {
//    return elem > 2;
//})
//console.log(arrele);

//arrname.sort(): return the sorted array: it gives correct result with string array only
var months = ['feb',"dec","April",'july']
//console.log(months.sort());

//CRUD operation with array
//console.log(arrname);
//arrname.push(7,9);  // push element into end of array & return length of updated array 
//arrname.unshift(7,9); //unshift method insert element into start of array & return length of updated array

//console.log(arrname.pop());// pop  element from end of array & return that element
//console.log(arrname);

//console.log(arrname.shift());// unshift  element from start of array & return that element
//console.log(arrname);


//splice method takes three arguments (starting element) (delete count) (element to be insterted)
// returns the array of deleted elements
//console.log(months);
//ret = months.splice("feb" , 1 ,"jan") 
//console.log(months);
//console.log(ret);

//********Map and reduce Method*******
//arr.map(callbackfun(currval,[index],array)) : return element for "new array" without mutating original array foreach mutate original array


//let arr = arrname.map((curEl) =>{
//    return curEl * 2
//}).filter ((curEl) =>{
//   return curEl>10
//})

//console.log(arr);


// Reduce Method used to convert 3d or 2d array into single dimension array:
//let arr = arrname.reduce((accumulator, curEl,index, arr)=>{
  //  console.log(`${accumulator, arr,index}`);
   // return accumulator += curEl;
//})
//console.log(arr);


//array DESTRUCTION: unpack values from arrays
//var details = ['aroon', 'kumar', 22]
//let [fname, lname, age, degree = "BSCS"] = details;
//console.log(fname,lname,age,degree);

// object destructuring: same as array destructuring but instead of [] braket use {} braket


// Spread operator 
var details = ['aroon', 'kumar', 22]
var detail = [...details, "BSCS"];
console.log(detail[0]);
console.log(details);
console.log(detail);
const newdetails = ["CS", ...details];
//newdetails = ["EE", ...newdetails] //error assignment to constant variable
console.log(newdetails);