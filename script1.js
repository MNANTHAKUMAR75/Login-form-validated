function validation()
{
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var pword = document.getElementById("pword").value;
    var cpword = document.getElementById("cpword").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(uname.length <5)
    {
        text ="Please enter valid username";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1)
    {
        text ="Please enter valid email address";
        error_message.innerHTML = text;
         return false;
        
    } 

    if(pword.length == 0)
    {
        text ="Please enter the password";
        error_message.innerHTML = text;
        return false;
    }

    if(pword.length <8)
    {
        text ="Password should contain atleast 8 charecters";
        error_message.innerHTML = text;
        return false;
    }


    if(pword.search(/[a-z]/)== -1)
    {
        text ="Passord should contain characters from a - z";
        error_message.innerHTML = text;
        return false;
    }
    
    if(pword.search(/[0-9]/)== -1)
    {
        text ="Password should contain atleast a numeric value";
        error_message.innerHTML = text;
        return false;
    }

    if(pword.search(/[A-Z]/)== -1)
    {
        text ="Password should contain a upper case character";
        error_message.innerHTML = text;
        return false;
    }

    if(pword.search(/[!/@/#/$/%/&/^/*]/)== -1)
    {
        text ="Password should contain atleast a special character";
        error_message.innerHTML = text;
        return false;
    }

    
    if(cpword.length == 0)
    {
        text ="Please confirm your password";
        error_message.innerHTML = text;
        return false;
    }

    if (pword.length != cpword.length)
    {
        text ="Password is not matching";
        error_message.innerHTML = text;
        return false;
    }

    
    alert("Successfully logged in")
    return true;
    
}