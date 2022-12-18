// creates an output function
function output(a){
    document.getElementById("display").value += a;
}

// runs the equal function
function equal(){
    let answer =  document.getElementById("display").value;
    answer = eval(answer);
    document.getElementById("display").value = answer;
}

// creates a function that clears everything done so far
function allClear(){
    document.getElementById("display").value = ""; 
}