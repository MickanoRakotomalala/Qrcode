const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
  let qrValue = qrInput.value;
  if(!qrValue){
    alert('Please,Type your Text correctly')
    return;
  }
  generateBtn.innerText = "Loading QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener('load', () => {
    generateBtn.innerText = "Create QR Code";
    container.classList.add('active');
  });
});

qrInput.addEventListener('keyup', () => {
  if(!qrInput.value){
    container.classList.remove('active');
  };
});