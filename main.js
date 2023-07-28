prediction1 ="sad"
prediction2 ="angry"

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'pnt',
    png_quality: 90
});

camera = document.getElementById('camera');

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src=" + data_uri +'>";'
    })
}

console.log('ml5 Version: ' + ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ekMQlXYu4/model.json",modelloaded);

function modelloaded(){
    console.log('Model Loaded!');

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 ="The first prediction is "+ prediction1;
    speak_data_2 ="The second prediction is "+ prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check(){
    
}
