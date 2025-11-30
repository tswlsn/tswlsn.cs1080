let url = document.location.toString();
let x, y;
let px = -8; 
let py = -32;
let cursor = document.getElementById("cursor");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let overlay = document.getElementById("overlay");
let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
let avgReview = 0;
let dark = false;

function toggleDarkMode() {
	let a = "#252525";
	let b = "#eeeeee";
	if (dark == true) {a = "#eeeeee"; b = "#252525"; dark = false}
	else {dark = true}
	document.documentElement.style.setProperty('--textcol', a);
	document.documentElement.style.setProperty('--bgcol', b);
}

if (url.includes("review.html")) {
updateReviews();
function postReview() {
	let revName = document.getElementById("username").value;
	if (revName == "") {revName = "anonymous"}
	let revText = document.getElementById("review").value
	revText = revText.replaceAll("<", "");
	revText = revText.replaceAll(">", "");
	let revVal = document.querySelector('input[name="rad"]:checked').value;
	let revTime = new Date();
	let postmark = revName + " at " + revTime.toLocaleDateString() + " " + revTime.toLocaleTimeString();
	reviews.push([postmark, revText, revVal]);
	localStorage.setItem("reviews", JSON.stringify(reviews));
}

function updateReviews() {
	let revHTML = "";
	for (let i = 0; i < reviews.length; i++) {
		let star = "";
		for (let j = 0; j < reviews[i][2]; j++) {star += "★";}
		for (let j = 0; j < 5 - reviews[i][2]; j++) {star += "☆";}
		revHTML += "<div><p><b>"+reviews[i][0]+"</b></p><p>"+star+"</p><p>"+reviews[i][1]+"</p></div>";
		avgReview += parseInt(reviews[i][2]);
	}
	avgReview = (avgReview / reviews.length) || 0;
        document.getElementById("reviewbox").innerHTML = revHTML;
        document.getElementById("revScore").innerHTML = avgReview.toFixed(1) + " stars";
    	fixReviews();
}

function fixReviews() {
	if (avgReview < 4 && avgReview > 0) {
		setTimeout(function(){
			let revName = "anonymous"
    			let revTime = new Date();
			let postmark = revName + " at " + revTime.toLocaleDateString() + " " + revTime.toLocaleTimeString();
			reviews.push([postmark, "awesome website!", 5]);
			localStorage.setItem("reviews", JSON.stringify(reviews));
    			updateReviews();
		}, 2000);
	}
}
}

window.addEventListener("mouseup", function (e) {
	let tmp = document.elementFromPoint(x + px, y + py);
	tmp.click();
	//cursor.style.left = (px + x) + "px";
	//cursor.style.top = (py + y) + "px";
})

window.addEventListener("mousemove", function (e) {
	x = e.clientX;
	y = e.clientY;
	cursor.style.left = (px + x) + "px";
	if (url.includes("face.html")) {
		if (y > 56) {cursor.style.top = (py + y) + "px";}
		if (y+py < 16) {py = 64; overlay.classList.remove("hidden");}
		else if (y+py >= 122) {py = Math.max(-y+123, -64);}
	}
	else {
		cursor.style.top = y-4 + "px";
	}
});

b1.onclick = function () {overlay.classList.add("hidden");}
b2.onclick = function () {postReview();}

