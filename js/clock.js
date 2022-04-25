let name = prompt("İsminizi Girin:");
let printName = name;

let myName = document.getElementById("myName");
let myClock = document.getElementById("myClock");

function showTime() {
  let d = new Date();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let time = document.getElementById("myClock");

  time.innerHTML = `${d.getHours()} ${d.getMinutes()} ${d.getSeconds()} ${
    days[d.getUTCDay()]
  }`;
  setTimeout(showTime, 1000);
}
showTime();

myName.innerHTML = `${printName}`;
