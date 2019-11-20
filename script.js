//problem 1
function firstLast6(arr){
    var hello= "";
    if (arr[arr.length-1]==6|| arr[0]==6){
        hello= true;

    }else{
        hello= false;
    }
    return hello;

}

//problem 2
function has23(arr){
    var n= arr.includes(2);
    var s= arr.includes(3);
    return n || s;
}

//problem 3
function fix23(arr){
    if(arr[0]==2 && arr[1]==3){
        arr[1]=0;
    }
    if (arr[1]==2 && arr[2]==3) {
        arr[2] = 0;
    }

    return arr;
}

//problem 4
function countYZ(str){
    var str= str.toLowerCase();
    var count=0;

    for ( var i=0; i< str.length; i++){
        if(str[i]== " " && str[i-1]== "z"){
            count= count +1;
        }

        if(str[i]== " " && str[i-1]== "y"){
            count= count + 1;

        }
    }

    if(str[str.length-1]== "y" || str[str.length-1 ]== "z"){
        count= count +1;
    }
    return count;
}



//problem 5
function endOther(str1, str2){
    var a= str1.toLowerCase();
    var b= str2.toLowerCase();
    var n= a.endsWith(b);
    var s= b.endsWith(a);
    return n||s;
}

//problem 6
function starOut(str){
    var s= "";

    for (var i=0; i<str.length; i++){
        if (str[i] != "*" && str[i+1] != "*" && str[i-1] != "*"){
            s= s + str[i];
        }
    }

    return s;

}

//problem 7
function getSandwich(str) {
    var first = str.indexOf("bread");
    var last = str.lastIndexOf("bread");

    var newS = str.substring(first + 5, last);

        if (first==last) {
            newS = "";
        }

    return newS;
}

//problem 8
function canBalance(arr){
    var insideSum= 0;
    var outsideSum= 0;

    for(var i=0; i< arr.length; i++){
        outsideSum += arr[i];

        for(var j= i+1; j< arr.length; j++){
            insideSum += arr[j];

        }
        if (insideSum==outsideSum) {
            return true;
        }
        insideSum= 0;
    }

    return false;
}

//problem 9
function countClumps(arr){
    var count= 0;

    for (var i= 0; i< arr.length; i++){
        if (arr[i]!= arr[i+1] && arr[i]== arr[i-1]) {
            count += 1;
        }
    }

    return count;
}

//problem 10
function evenlySpaced(a, b, c){
    var ting= "";
    if (a-b == b-c || b-a == b-c || a-b== c-b || c-a== a-c|| a-c== c-b|| b-a==a-c ){
        ting= true;
    }else{
        ting= false;
    }

    return ting;
}


function tester(){
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += endOther(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    document.getElementById("output").innerHTML += getSandwich(true, false);
    document.getElementById("output").innerHTML += canBalance(true, false);
    document.getElementById("output").innerHTML += countClumps(true, false);
    document.getElementById("output").innerHTML += evenlySpaced(true, false);
}