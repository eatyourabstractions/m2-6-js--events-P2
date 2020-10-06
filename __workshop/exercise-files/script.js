// add js here

function getRandomElemsFromArr(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

let randomWords = [
    "lonely",
    "camera",
    "ill-fated",
    "parcel",
    "library",
    "lighten",
    "prevent",
    "list",
    "creature",
    "peel",
    "money",
    "tenuous",
    "divergent",
    "wary",
    "slave",
    "concern",
    "screeching",
    "shiver",
    "friendly",
    "boring",
    "flashy",
    "owe",
    "sleet",
    "lucky",
    "roll" ]


document.getElementById("submit").addEventListener("click", function(evt){
    evt.preventDefault()
    let [p_1, p_2] = document.getElementsByClassName("password");
    
    let flag = false;
    let pass_one = false;
    let pass_two = false;
    let msg_box = document.getElementById("error_msg");

    const clearErrors = function(){
        p_1.style.borderWidth = "1px";
        p_1.style.borderColor = "ligthgray";
        p_2.style.borderWidth = "1px";
        p_2.style.borderColor = "ligthgray";
        pass_one = false;
        pass_two = false;
        flag = false;
        msg_box.innerHTML = "";
        msg_box.style.display = "none";
    }

    clearErrors()
    let suggestedPass = getRandomElemsFromArr(randomWords,5).join("-")
    console.log(suggestedPass.length)
    let shortPass = `<p>Your password is too short! How about "${suggestedPass}"</p><br/>`
    let passAreDifferent = `<p>Passwords are different, please make sure to enter the same password in both fields</p><br/>`
    if(p_1.value !== p_2.value){
       msg_box.innerHTML += passAreDifferent;
       flag = true
    } 
    if(p_1.value.length < 10){
        
        p_1.style.borderWidth = "5px";
        p_1.style.borderColor = "pink";
        p_1.focus()
        pass_one = true;
        flag = true;
        
    } 
    if(p_2.value.length < 10 ){
        
        p_2.style.borderWidth = "5px";
        p_2.style.borderColor = "pink";
        p_2.focus()
        pass_two = true;
        flag = true;
    } 

    if(pass_one || pass_two){
        msg_box.innerHTML += shortPass;
    }

    if(flag){
        msg_box.style.display = "block";
    }


    
})

document.getElementById("clear").addEventListener("click", function(evt){
    evt.preventDefault();
    [...document.getElementsByTagName("input")].map(elem => elem.value = "");
    document.getElementById("agree").checked = false;
});

