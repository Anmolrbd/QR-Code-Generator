const inputtextUrl = document.getElementById("inputtextUrl");
const generatebutton = document.getElementById("generatebutton");
const qrcontainer = document.getElementById("qrcontainer");
const downloadbtn = document.getElementById("downloadbtn");

// Generate QR code
generatebutton.addEventListener('click', () => {
    qrcontainer.innerHTML = "";
    const text = inputtextUrl.value.trim();
    if (!text) {
        alert("Enter text or URL");
        return;
    }
    qrcontainer.className = "mt-4 m-auto w-max"
    new QRCode(qrcontainer, {
        text: text,
        width: 200,
        height: 200
    });
});


downloadbtn.addEventListener('click', () => {
    if (!qrcontainer.innerHTML.trim()) {
        alert("Generate QR first!");
        return;
    }

    html2canvas(qrcontainer).then(canvas => {
        canvas.toBlob(blob => {
            const text = inputtextUrl.value.trim();
            let newname = text.slice(0,-4);
            saveAs(blob, `${newname}.png`);
        });
    });
});
