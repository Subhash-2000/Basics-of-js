function nextInLine(array, num){
    array.push(num);
    return array.shift();
}
let myArray = [10, 20, 30, 40 ,50];
let ele = nextInLi
ne(myArray, 60);
console.log(ele);
document.write(ele);
alert(ele);