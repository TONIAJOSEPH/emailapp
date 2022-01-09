function validateemail(){
    var email=document.getElementById("exampleFormControlInput1").value;
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(regexp.test(email)){
        exampleFormControlInput1.style.border= "2px solid green" ;
        return true;
    }
    else{
        // inputEmail3.innerHTML= "invalid email" ;
        exampleFormControlInput1.style.border= "2px solid red" ;
        return false;
    } 
    }
    //message validation
    function messagevalidation(){
        var msg=document.getElementById("exampleFormControlTextarea1").value;
        if(msg!=""){
            exampleFormControlTextarea1.style.border="2px solid green";
            return true;
        }
        else{
            exampleFormControlTextarea1.style.border="2px solid red";
            return false;
        }
    }