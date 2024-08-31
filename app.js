// let num = 20;

// if (num % 10 == 0){
//    console.log("good");
// } else {
//    console.log("bad");
// }


//   let fullName = prompt("enter name");
//   let age = prompt("enter age");
//   alert(`${fullName} is ${age} years old.`);


// let quarter = "6";

// switch (quarter){
//    case"1":
//    console.log("Janaury, February, March");
//    break;
//    case"2":
//    console.log("April, May, June");
//    break;
//    case"3":
//    console.log("July, August, September");
//    break;
//    case"4":
//    console.log("October, November, December");
//    break;
//    default:
//      console.log("Not a quarter!")
// }


// let str = "almond";
// if ((str[0] == 'a' || str[0] =='A') && (str.length > 5)){
//    console.log("Golden string");
// } else{
//    console.log("Not a golden string");
// } 




// let a = 200;
// let b = 500;
// let c = 600;

// if (a > b){
//    if (a > c){
//       console.log(a,"is the largest number")
//    }else {
//       console.log(c, "is the largest number")
//    }
// }else {
//    if (b > c){
//       console.log(b, "is the largest number")
//    } else {
//       console.log(c, "is the largest number")
//    }
// }




// let num1 = 1284987569673747;
// let num2 = 2737;

// if ((num1 % 10) == (num2 % 10)){
//    console.log("numbers have the same last digits which is", num1 % 10);
// } else {
//    console.log("numbers don't have the same last digits.");
// }

// let arr = [7, 9, 0, -2];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);


// let arr = [7, 9, 0, -2];
// let n = 2;

// let ans = arr.slice(arr.length-n);
// console.log(ans);



// let str = prompt ("please enter a string");
// if (str.length == 0){
//     console.log("string is empty")
// }else{
//     console.log("string is not empty")
// }



// let str = "apnaCOLLEGE";
// let idx = 3;

// if(str[idx] == str[idx].toLowerCase()){
//     console.log("character is lowercase")
// } else{
//     console.log("character is not lower case")
// }



// let str = prompt("please enter a string");
// console.log("orginal string = ${str}");
// console.log("string without spaces - ${str.trim()}");



let arr = ["hello",'a',23,64,99,-6];
let item = "64";
if(arr.indexOf(item)!= -1){
    console.log("element exists in array");
}else {
    console.log("element doesn't exist in array");
}

for(let i=1; i<=5; i++){
    console.log(i);
}