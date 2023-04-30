//  START DIGITAL CLOCK
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const time = setInterval(function time () {
let dateToday = new Date();
let hr = dateToday.getHours();
let min = dateToday.getMinutes();
let sec = dateToday.getSeconds();
if(hr < 10) {
    hr = '0' + hr;
}
if(min < 10) {
    min = '0' + min;
}
if(sec < 10) {
    sec = '0' + sec;
}
hour.textContent = hr;
minute.textContent = min;
seconds.textContent = sec;
},1000);
//  END DIGITAL CLOCK
// START BOOKING TICKETS





// const usernameSignUp=document.querySelector("#usernameSignUp").value;
// const email=document.querySelector("#email").value;
// const passSignUp=document.querySelector("#passSignUp").value;
// const confPass=document.querySelector("#confpass").value;
// const messageCheck1=document.querySelector("#messagecheck1");
// const messageCheck2=document.querySelector("#messagecheck2");
// const submitSignUp=document.querySelector("#submitSignUp");
// submitSignUp.addEventListener("click", function(){
// 	usernameSignUp=document.querySelector("#usernameSignUp").value;
// 	email=document.querySelector("#email").value;
// 	passSignUp=document.querySelector("#passSignUp").value;
// 	confPass=document.querySelector("#confpass").value;
// 	if(usernameSignUp==="" || email==="" || passSignUp==="" || confPass==="")
// 	{
// 		messageCheck1.innerHTML="All Fields Are Required"; 
// 		if(passSignUp!=="" && confPass!=="" && passSignUp!==confPass)
// 		{
// 			messageCheck2.innerHTML="Password And Confirm Password Must Be Same";
// 		}
// 	}
// 	else
// 	{
// 		messageCheck1.innerHTML=""; 
// 		messagecheck2.innerHTML="";
// 		if(passSignUp!==confPass)
// 		{
// 			messageCheck1.innerHTML="Password And Confirm Password Must Be Same";
// 		}
// 		else
// 		{
// 			messageCheck1.innerHTML=""; 
// 			messagecheck2.innerHTML="";
// 			alert("Thank You For Registering!!");
// 		}
// 	}
// });

const departure=document.querySelector("#inputGroupSelect01").value;
const arrival=document.querySelector("#inputGroupSelect02").value;
const dateDeparture=document.querySelector("#departure").value;
const dateReturn=document.querySelector("#return").value;
const btnSearch=document.querySelector("#btn-search");
btnSearch.addEventListener("click",function(){
	const departure=document.querySelector("#inputGroupSelect01").value;
	const arrival=document.querySelector("#inputGroupSelect02").value;
	const dateDeparture=document.querySelector("#departure").value;
	const dateReturn=document.querySelector("#return").value;
	const dD=parseInt(dateDeparture.substring(8,10));
	const dR=parseInt(dateReturn.substring(8,10));
	if(departure==="departurePlace")
	{
		alert("Wybierz właściwe miejsce wylotu");
	}
	else if(arrival==="arrivalPlace")
	{
		alert("Wybierz właściwe miejsce docelowe");
	}
	else if(dateDeparture===""||dateReturn===""||dD>dR||dD<24||dR<24)
	{
		alert("Podaj właściwą datę");
	}
});
// END BOOKING TICKETS
 
 
 
 
 
 
 
 
//  //DISABLED PAST DATES IN RESERVATION DATE
// $(document).ready(function () {
// var dateToday = new Date();
// var month = dateToday.getMonth() + 1;
// var day = dateToday.getDate();
// var year = dateToday.getFullYear();
// if (month < 10) month = "0" + month.toString();
// if (day < 10) day = "0" + day.toString();
// var maxDate = year + "-" + month + "-" + day;
// $("#flight-date").attr("min", maxDate);
// });










