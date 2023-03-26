
let btn = document.querySelector(".btn");
let adviceId = document.getElementById("advice-id");
let adviceText = document.getElementById("advice-text");
const url = "https://api.adviceslip.com/advice";

async function fetchadvice() {
    
        let response = await fetch(url);
        const {slip : {id , advice}} = await response.json();

        adviceId.innerHTML = id;
        adviceText.innerHTML = advice;

    if (!response.ok) {
        throw new Error(`can not fetch advice: ${response.status}`);
    }
}
fetchadvice();
btn.addEventListener('click' , fetchadvice);