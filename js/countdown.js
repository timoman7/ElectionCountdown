let electDay = new Date(1604379600000);
Date.prototype.countdown = function(endDate){
	let msUnits = {
		day: 1000*60*60*24,
		hour: 1000*60*60,
		minute: 1000*60,
		second: 1000
	};
	startDateMS = this.getTime();
	endDateMS = endDate.getTime();
	let diffMS = endDateMS - startDateMS;

	let diff = {
		day: Math.round(diffMS/msUnits.day),
		hour: (Math.round(diffMS/msUnits.hour)%24),
		minute: (Math.round(diffMS/msUnits.minute)%60),
		second: (Math.round(diffMS/msUnits.second)%60)
    };
	return diff;
};

let countdown = document.querySelector("#countdown");
function updateCountdown(){
  let countdownObj = (new Date(Date.now())).countdown(electDay);
  countdown.innerHTML = `${countdownObj.day} Day${countdownObj.day > 1 ? "s" : ""}\n${countdownObj.hour} Hour${countdownObj.hour > 1 ? "s" : ""}\n${countdownObj.minute} Minute${countdownObj.minute > 1 ? "s" : ""}\n${countdownObj.second} Second${countdownObj.second > 1 ? "s" : ""}`;
}
window.addEventListener('load',function(){
  setInterval(updateCountdown, 100);
});
