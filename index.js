function time() {
	let newTime = new Date();
	let hrs = newTime.getHours();
	let mins = newTime.getMinutes();
	let secs = newTime.getSeconds();
	let ampm = 'AM';
	if (hrs == 24) {
		hrs = 00;
	} else if (hrs > 12) {
		hrs = hrs - 12;
		ampm = 'PM';
	} else if (hrs == 12) {
		ampm = 'PM';
	}
	setTime(hrs, mins, secs, ampm);
	setInterval(() => {
		time();
	}, 1000);
}
time();

function setTime(hrs, mins, secs, ampm) {
	let hours = document.querySelector('.img1');
	let minutes = document.querySelector('.img2');
	let seconds = document.querySelector('.img3');
	let ampms = document.querySelector('.img4');
	let row2Text = document.querySelector('.rowr2');

	hours.innerText =
		Math.floor(hrs / 10) === 0 ? `0${hrs} hours` : `${hrs} hours`;
	minutes.innerText =
		Math.floor(mins / 10) === 0 ? `0${mins} mins` : `${mins} mins`;
	seconds.innerText =
		Math.floor(secs / 10) === 0 ? `0${secs} secs` : `${secs} secs`;
	ampms.innerText = ampm;

	if (hrs >= 10 && hrs < 12 && ampm == 'AM')
		row2Text.innerText = `GRAB SOME HEALTHY BREAKFAST!!!`;
	else if (hrs >= 12 && hrs < 4 && ampm == 'PM')
		row2Text.innerText = `LET'S HAVE SOME LUNCH !!`;
	else if (hrs >= 4 && hrs < 8 && ampm == 'PM')
		row2Text.innerText = `STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!`;
	else row2Text.innerText = `CLOSE YOUR EYES AND GO TO SLEEP`;
}

document.querySelector('.sub1').addEventListener('click', () => {
	let option = document.getElementsByTagName('option');
	let time1 = document.querySelector('#wakeuptime').selectedIndex;
	let time2 = document.querySelector('#lunchtime').selectedIndex;
	let time3 = document.querySelector('#naptime').selectedIndex;
	let time4 = document.querySelector('#nighttime').selectedIndex;

	document.querySelector(
		'#time1'
	).innerHTML = `Wake UP Time : ${option[time1].innerText}`;
	document.querySelector(
		'#time2'
	).innerHTML = `Lunch Time : ${option[time2].innerText}`;
	document.querySelector(
		'#time3'
	).innerHTML = `Nap Time : ${option[time3].innerText}`;
	document.querySelector(
		'#time4'
	).innerHTML = `Night Time : ${option[time4].innerText}`;

	let presentTime = new Date();

	if (
		presentTime.getHours() === parseInt(option[time1].value) &&
		parseInt(option[time1].value) < 12 &&
		parseInt(option[time1].value) > 5
	) {
		document.querySelector('.rowl3').innerHTML = `GOOD MORNING!! WAKE UP !!`;
		document.querySelector('.img').src = `./Component 30 – 1.svg`;
	} else if (
		presentTime.getHours() === parseInt(option[time2].value) &&
		parseInt(option[time2].value) < 16 &&
		parseInt(option[time2].value) > 12
	) {
		document.querySelector(
			'.rowl3'
		).innerHTML = `GOOD AFTERNOON !! TAKE SOME SLEEP`;
		document.querySelector('.img').src = `./Component 31 – 1.svg`;
	} else if (
		presentTime.getHours() === parseInt(option[time3].value) &&
		parseInt(option[time3].value) < 20 &&
		parseInt(option[time3].value) > 16
	) {
		document.querySelector('.rowl3').innerHTML = `GOOD EVENING !!`;
		document.querySelector('.img').src = `./lunch_image.png`;
	} else if (
		(presentTime.getHours() === parseInt(option[time4].value) &&
			parseInt(option[time2].value < 5)) ||
		parseInt(option[time2].value > 20)
	) {
		document.querySelector('.rowl3').innerHTML = `GOOD NIGHT !!`;
		document.querySelector('.img').src = `./Component 32 – 1.svg`;
	}
});
