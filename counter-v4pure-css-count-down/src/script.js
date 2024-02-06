// tried to make it count down to a specifiy date but introducing JS to pure CSS timer caused more problems that is was worth. Hence JS abandoned.

/*var date1 = new Date(); // current date
var date2 = new Date("02/27/2024"); // mm/dd/yyyy format
var timeDiff = Math.abs(date2.getTime() - date1.getTime()); // in miliseconds
var timeDiffInSecond = Math.ceil(timeDiff / 1000); // in second

//alert(timeDiffInSecond);
var str = timeDiffInSecond.toString();

console.log(str);

for (var i = 0; i < str.length; ++i) {
	var chr = str.charAt(i);
	console.log(chr);

	var tm = parseInt(chr);
	console.log("tm " + tm);
	$(".holder .reel:nth-child(" + (i + 1) + ")")
		.children("div")
		.each(function () {
			//$(this).html((tm + 10) % 10);
			$(this).css("transform", "translate(-50%, -50%) rotateX(" + ((tm + 10) % 10) + " * 36deg) translateZ(154px)");
			tm--;
		});
}
