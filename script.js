let imgBox = document.getElementById('imgBox'),
    qrImage = document.getElementById('qrImage'),
    qrText = document.getElementById('qrText')

function generateQR() {
    // qrImage.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrText.value;
    if (qrText.value.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imgBox.classList.add('show-img')
    }
   

}