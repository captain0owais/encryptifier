function calculateE(){
    console.log("Encrypting...")
    //encrypting thrice
    var tbetext = document.getElementById("encrypt_text").value;
    console.log(tbetext, " entered text ");
    for (var i=0; i<3; i++) { 
        var tbetext = btoa(tbetext);
        console.log(tbetext,i);
    }
    document.getElementById("resultsE").innerText=tbetext;
}

function calculateD(){
    console.log("Eecrypting...")
        // Decrypting thrice
        var tbdtext = document.getElementById("decrypt_text").value;
        for (var i=3; i>0; i--) { 
            var tbdtext = atob(tbdtext);
            console.log(tbdtext,i);
        }
    document.getElementById("resultsD").innerText=tbdtext;

}

function learn(){
    document.getElementById("learn").innerText="To encrypt type/paste the text to be encrypted in the first text box, the output is displayed under the textbox";
}

function endlearn(){
    document.getElementById("learn").innerText="";
}
