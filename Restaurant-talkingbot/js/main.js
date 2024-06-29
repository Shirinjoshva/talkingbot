let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let greetings=["welcome to our restaurant"];
let seat = ["here is your seat"];
let likes = ["What would you like to order"];
let menucard = ["Here is our menu"];
let order = ["order placed it will come in awhile"];
let choice = ["do you like to order any other items"];
let food = ["here is your chicken meal","here is the food you order"];
let extra = ["thankyou its our pleasure"];
let thank = ["here is your bill it cost $25.50"];
let closing = ["thankyou so much come back again"];
let youtube = ["opening youtube channel"];
let menu = ["opening menu"];
let mainitems = ["opening main items"];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('hello')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }    
    if(message.includes('is there any seat available')){
        let finalresult = seat[Math.floor(Math.random() * seat.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you')){
        let finalresult = likes[Math.floor(Math.random() * likes.length)];
        speech.text = finalresult;
    }
    if(message.includes('menu card please')){
        let finalresult = menucard[Math.floor(Math.random() * menucard.length)];
        speech.text = finalresult;
    }
    if(message.includes("I would like to have a chicken meal")){
        let finalresult = order[Math.floor(Math.random() * order.length)];
        speech.text = finalresult;
    }
    if(message.includes('ok fine')){
        let finalresult = choice[Math.floor(Math.random() * choice.length)];
        speech.text = finalresult;
    }
    if(message.includes('no thats enough')){
        let finalresult = food[Math.floor(Math.random() * food.length)];
        speech.text = finalresult;
    }
    if(message.includes('that was delicious')){
        let finalresult = extra[Math.floor(Math.random() * extra.length)];
        speech.text = finalresult;
    }
    if(message.includes('can i get the bill please')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('thanks for your delicious meal' || 'your way of serving was really good')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if (message.includes("open my YouTube")) {
        let finalresult=youtube[Math.floor(Math.random()*youtube.length)];
        speech.text=finalresult;
        console.log("opening youtube");
        window.open("https://www.youtube.com/watch?v=pwC7Zx5yrYw&t=43s");
    }
    if (message.includes("open menu")) {
        let finalresult=menu[Math.floor(Math.random()*menu.length)];
        speech.text=finalresult;
        console.log("opening menu");
        window.open("http://127.0.0.1:5502/index.html");
    }
    if (message.includes("open main items")) {
        let finalresult= mainitems[Math.floor(Math.random()* mainitems.length)];
        speech.text=finalresult;
        console.log("opening main item");
        window.open("http://127.0.0.1:5500/index.html");
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
