const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector('.qr-body');
let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(qrText.value.length > 0) {
     generateQRcode();
  }
  else{
    alert("Enter the text or URL to generate QR code")
  }
  
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    if(qrText.value.length > 0) {
        generateQRcode();
     }
     else{
       alert("Enter the text or URL to generate QR code")
     }
})

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img != null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('.canvas').toDataUrl()}`);
    }
})

function generateQRcode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
