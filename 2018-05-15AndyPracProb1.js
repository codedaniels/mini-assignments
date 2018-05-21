$(document).ready(function() {
rotate90degrees(a);

})


    // you want it to become [[7,4,1].[8,5,2],[9,6,3]]
    // a visual representation of what's wanted:
    // [[1,2,3],    to      [[7,4,1].
    //  [4,5,6],             [8,5,2],
    //  [7,8,9]]             [9,6,3]]
    // basically the whole array shifts around 90 degrees
    

var a = [[1,2,3],[4,5,6],[7,8,9]];
var shiftedArray = [];

           /* newArray.push(array1[2][0]);
           newArray.push(array1[1][0]);
           newArray.push(array1[0][0]);

           newArray.push(array1[2][1]);
           newArray.push(array1[1][1]);
           newArray.push(array1[0][1]);

           newArray.push(array1[2][2]);
           newArray.push(array1[1][2]);
           newArray.push(array1[0][2]);

           console.log(newArray);*/

// doesn't work quite right, pushes into an array, but only 1 not 3 separate in an array
function rotate90degrees (array) {
    for (var j = 0; j < array.length; j++) {
    for (var i=array.length-1;i>=0;i--) {
        shiftedArray.push(array[i][j]);
        console.log(shiftedArray);
        }
    }
};

// copies original array data to new array then simply replaces 
var firstArray = [[1,2,3], [4,5,6], [7,8,9]]
var reverseArray = [];
console.log("first array before function" + firstArray)
function rotateClockWise(array){
    for (var i = 0; i < firstArray.length; i++) {
        reverseArray.push(firstArray[i].slice());
    }
    reverseArray = reverseArray.reverse();
 for(var i = 0; i < reverseArray.length; i++){
   for (var k = 0; k < i; k++){
     var tempNum = reverseArray[i][k];
     reverseArray[i][k] = reverseArray[k][i];
     reverseArray[k][i] = tempNum;
   }
 }
 return reverseArray
}

rotateClockWise(firstArray);






