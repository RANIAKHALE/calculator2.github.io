function append(item){
    document.getElementById("display").value  +=item;
}

function calculate(){

    try{
        let calculate_value=eval(document.getElementById("display").value);
    document.getElementById("display").value=calculate_value;
    }
    catch{
        document.getElementById("display").value="error"
    }

}

function clear(){
    document.getElementById("display").value="";
}