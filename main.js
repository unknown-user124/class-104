Webcam.set ({
    width:350,
    height:200,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function capture() {
Webcam.snap(function(data_uri){
    document.getElementById("btnbtn2").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
})
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S0wryNhRl/model.json',modelLoaded);