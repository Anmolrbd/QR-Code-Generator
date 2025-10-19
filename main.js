const inputtextUrl = document.getElementById("inputtextUrl");
const generatebutton = document.getElementById("generatebutton");
const qrcontainer = document.getElementById("qrcontainer");

generatebutton.addEventListener('click',()=>{
    qrcontainer.innerHTML= "";
    const inputvalue = inputtextUrl.value.trim();
    if(!inputvalue) {
        alert("Enter prompt");
        qrcontainer.className = "";
    }else{
        new QRCode(qrcontainer,{
        text: inputvalue,
        width: 200,
        height: 200
    })
    qrcontainer.className ="w-max m-auto mt-5";
    }
    
})