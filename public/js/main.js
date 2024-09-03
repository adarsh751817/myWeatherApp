const input = document.getElementById('input');
const mybtn = document.getElementById('mybtn');
const mypara1 = document.getElementById('mypara1');
const mypara2 = document.getElementById('mypara2');


function getMonthsDay() {
  let mydate = new Date();
  let month = mydate.getMonth();
  let day = mydate.getDay();
  let year = mydate.getFullYear();

  const mydays = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  let myday = mydays[day];
  console.log(myday);
  const mymonths = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NAU",
  ];
  let mymonth = mymonths[month];
  console.log(mymonth)
  // console.log(mymonth + " - " + year + " || " + myday);

  mypara1.innerHTML = mymonth + " - " + year + " || " + myday + "-";
}

getMonthsDay();



async function getInfo(event) {
  event.preventDefault();

  let inputval = input.value;
  console.log(inputval);
  
  let my_url = `https://api.openweathermap.org/data/2.5/weather?${inputval}&appid=cf19835d42bacda5fcbb9cb5e6b3cc65`;

  try{

    const response = await fetch(my_url);
  const parseInObj = await response.json();
  const dataArray =  [parseInObj];
  console.log(dataArray);

  mypara2.innerHTML = dataArray[0].main.temp + '°F';
  // mypara2.innerHTML = dataArray[0].weather[0].main;

  }catch(e)
  {
    console.log('something went wrong');
  }
 
}

mybtn.addEventListener('click', getInfo)

