let reeds = 7888;
let form = document.getElementById('form');
let mailformat = /^[0-9]+$/;
let error = [];
let err = [];
let ell = [];
let door = document.getElementById('door');
let dd = document.getElementById('name');
let cardname = document.getElementById('cardname')
let backcard = document.getElementById('backcard')
let datee = document.getElementById('date');
let dateey = document.getElementById('datey');
let cardnum = document.getElementById('cardnum');
let thanks = document.getElementById('thanks');
  let fm = document.getElementById('form');

 form.addEventListener('submit', function(e){
 e.preventDefault()
 let number = document.getElementById('number')
 if (number.value.match(mailformat)){
    error.push('valid')
    thanks.style.display = "flex";
     fm.style.display = "none";
 }
 else if(number.value == "")
 {
   error.push("can't be blank")
   door.innerText = reeds;
 }
  else
 {
    error.push('wrong format, numbers only')
 }
 let message = document.getElementById('message')
 message.innerText = error

 let cvc = document.getElementById('cvc')
 if(cvc.value.match(mailformat)){
    err.push(' ')
    backcard.innerText = cvc.value
    thanks.style.display = "flex";
   fm.style.display = "none";
 }
 else if(cvc.value == "")
 {
   err.push("can't be blank")
    backcard.innerText = "000"
    }
 else {
    err.push('invalid')
 }

 
 if(datee.value.match(mailformat)){
    ell.push(' ')
    thanks.style.display = "flex";
     fm.style.display = "none";
 }
 else if(datee.value == "")
 {
    ell.push("Can't be blank")
 }
 else
 {
   ell.push('invalid')
 }
 let ello = document.getElementById('ello')
 ello.innerText = ell
 let msg = document.getElementById('msg')
 msg.innerText = err 
 door.innerText = number.value
 cardname.innerText = dd.value
 datee.value += "/"
 cardnum.innerText = datee.value
 cardnum.innerText += dateey.value
 
 
  
   
   // if(cvc.value == 333){
      // err.push(' ')
      // backcard.innerText = cvc.value
      // thanks.style.display = "flex";
   //   fm.style.display = "none";
   // }
 })
 
function myfunc() {
   
  }



 
