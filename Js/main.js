// scoping
//var bilan ochilgan o'zgaruvchilar faqat funksiya bilan ochilgan skopkalardan tashqariga tasir qilmay faqat shu scopkaning ichida ishlaydi.
// let bilan ochilgan o'zgaruvchilar esa barcha scopkalar ichida ochilgani tashqariga ta'sir ko'rsatmaydi
// var a = 2;
// {
//     var a = 3;
// }
// console.log(a);  //bunda a 3 ga teng buladi. sababi bu function scopka emas.

// const d = () => {
//     var a = 5;
//     console.log(a)
// }// bunda 5 chiqadi


// // closure
// let a = 1;
 
// if (true) {
//     let a = 2;
//     console.log(a);

//     if (true) {
//         let b = 3;
//         console.log(a);
//     }//shunda b o'z scopcasida qiymat topolmasa bitta tashqaridan izlab topadi.
// }

// function balance() {
//     let b = 100;

//     return {
//         topUp: (amount) => {
//             b+=amount;
//             console.log(b);
//         },
//         withdraw: (amount) => {
//             b-=amount;
//             console.log(b);
//         },
//     };
// }

// let jasurBalanse= balance();
// jasurBalanse.topUp(1200);

// Hoisting
// a();
// b();
// c();

// function a() {
//     console.log(435);
// }// bunda ishlaydi, vaholanki funksiya pastda ochilgan bo'lsa ham
// var b = function () {
//     console.log(3345);
//}// bunda xatolik beradsdi.
//arrow funksiyada ham xatolik beradi.
// sum(5)(-1)
// function sum(a) {
//     return function sum1(b) {
//         console.log(a+b)
//     }
// }

let form1 = document.getElementById("chatForm1");
let form2 = document.getElementById("chatForm2");

let accessMsg1 = document.getElementById("message1");
let accessMsg2 = document.getElementById("message2");

let displayMsg1 = document.getElementById("messageS1");
let displayMsg2 = document.getElementById("messageS2");

let inputFile1 = document.querySelector("#file");
let inputFile2 = document.querySelector("#file1");
let img1 =document.querySelectorAll(".image1");
let img2 =document.querySelectorAll(".image2");


let mesValue1 = "You: " + accessMsg1.value;
let mesValue2 = "You: " + accessMsg2.value;
let mesValue3 = "You: " + inputFile1.value;
let mesValue4 = "You: " + inputFile2.value;

function handleForm(event) {
  event.preventDefault();
}
form1.addEventListener("submit", handleForm);
form2.addEventListener("submit", handleForm);

let massivAdd = [];
// let localMassage = localStorage.getItem("Toshmat");
// displayMsg1.innerHTML = localMassage;
// let localMassage1 = localStorage.getItem("Eshmat");
// displayMsg2.innerHTML = localMassage1;



function sendMessage1() {
   if (accessMsg1.value !== "") {
     displayMsg1.innerHTML +=
       "<div> Men: " +
       "<span style='background: rgb(1, 6, 48); padding:10px; color:linen; border-radius:25px 25px 25px 0;display:flex; flex-wrap: wrap;'>" +
       accessMsg1.value +
       "</span>" +
       "</div>" +
       "<br>";
       massivAdd.push(accessMsg1.value);
       localStorage.setItem("Toshmat", JSON.stringify(massivAdd));
     displayMsg2.innerHTML +=
       "<div style = 'margin-left:18rem;'> Toshmat: " +
       "<span style='background: rgb(1, 6, 48); padding:10px; color:linen; border-radius:25px 25px 25px 0;display:flex; flex-wrap: wrap;'>" +
       accessMsg1.value +
       "</span>" +
       "</div>" +
       "<br>";
   }

scrollToBottom("messageS1");
form1.reset();
}


function sendMessage2() {
  if (accessMsg2.value.trim() !== "") {
     displayMsg1.innerHTML +=
       "<div style = 'margin-left:18rem;'> Eshmat: " +
       "<span style='background: rgb(1, 6, 48); padding:10px; color:linen; border-radius:25px 25px 25px 0;display:flex; flex-wrap: wrap;'>" +
       accessMsg2.value +
       "</span>" +
       "</div>" +
       "<br>";
        massivAdd.push(accessMsg2.value);
        localStorage.setItem("Eshmat", JSON.stringify(massivAdd));
     displayMsg2.innerHTML +=
       "<div> Men: " +
       "<span style='background: rgb(1, 6, 48); padding:10px; color:linen; border-radius:25px 25px 25px 0;display:flex; flex-wrap: wrap;'>" +
       accessMsg2.value +
       "</span>" +
       "</div>" +
       "<br>";
  }
  scrollToBottom("messageS2");
  form2.reset();
}



function scrollToBottom(id) {
  let div = document.getElementById(id);
  div.scrollTop = div.scrollHeight - div.clientHeight;
}
