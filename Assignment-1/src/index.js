import ("./index.css"); 
import img from './masai.png'
import { submit } from './submit';

const tital = document.createElement("h1");
tital.innerHTML = "Masai School";
tital.classList.add("redcolor")
 
 const photo = document.createElement("img")
 photo.classList.add("pic")
 photo.src = img;
 
 
 const text = document.createElement("textarea");
 text.classList.add("text")
 text.rows = "20";
 text.cols = "50";

 const textTital = document.createElement("h2");
 textTital.innerText= "Write your nots";

 const submitBtn = document.createElement("div");
 submitBtn.textContent = "Submit";
 submitBtn.classList.add("btn");
 
 document.getElementById("root").append(photo, tital);
 
 document.getElementById("tex").append(textTital, text,submitBtn);

 submitBtn.onclick = ()=>{
     submit(text.value)
 }
 
