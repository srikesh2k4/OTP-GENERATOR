const textOTP = document.querySelector("#otp")
const buttonOTP = document.querySelector("#button")

var randomotp = () =>{
    var newotp =Math.trunc(Math.random()*9000+1000);
    textOTP.innerHTML=newotp;
    textOTP.classList.add("otp")
    textOTP.classList.remove("before")
}

buttonOTP.addEventListener("click",(e)=>{
    e.preventDefault;
    randomotp();
});

console.log(randomotp)