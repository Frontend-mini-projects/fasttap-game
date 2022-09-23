		alert("Welcome to fast tap game. \nHere First click on start button and fill you name.\n In this Game you have to continuiously tap 'Click me' button within given time. ");

		// Function to change webpage background color
		function changeBodyBg() {

			let bodybg = document.body.style.backgroundColor;


			if (bodybg === "aliceblue")
				document.body.style.backgroundColor = "antiquewhite";

			else if (bodybg === "antiquewhite")
				document.body.style.backgroundColor = "azure";

			else if (bodybg === "azure")
				document.body.style.backgroundColor = "aquamarine";

			else if (bodybg === "aquamarine")
				document.body.style.backgroundColor = "aqua";

			else if (bodybg === "aqua")
				document.body.style.backgroundColor = "beige";

			else
				document.body.style.backgroundColor = "aliceblue";



			//  to count the number of current tap

			var score = document.getElementById("currscore").innerText;
			// console.log(`Current score is : ${score}`);
			document.getElementById("currscore").innerText = parseInt(score) + 1;
			// console.log(bodybg);


		}


		// timer code
		function starttimer() {
			// alert(`Start timer function`);
			var username = prompt("Enter user name");
			// var total_time = prompt("Enter time limit (sec)");
			
			// if(total_time == "")
			// 	total_time = 10;

            var total_time = 20;

			document.getElementById("lefttime").innerText = total_time;

			document.getElementById("timerbtn").style.display = "none";

			document.getElementById("counter").disabled = false;

			// var total_time = 20.00;
			var timeleft = 10;
			var minus_time = 0.01;
			var downloadTimer = setInterval(function () {
				if (timeleft <= 0.02) {

					console.log(`inner text is : ${document.getElementById("lefttime").innerText}`);


					document.getElementById("counter").disabled = true;
					document.getElementById("playagain").style.display = "block";


					clearInterval(downloadTimer);
				
					let maxscore = parseInt(document.getElementById("maxscore").innerText);
					let currscore = parseInt(document.getElementById("currscore").innerText);


					console.log(`Current score is : ${currscore} and maxscore is : ${maxscore}`);


					if (maxscore < currscore) {
						maxscore = currscore;
						document.getElementById("maxscore").innerText = maxscore;

						console.log(`High score holder user name is : ${username}`);
						document.getElementById("highscoreusername").innerText = username;
					}

				}
				timeleft = total_time - minus_time;
				document.getElementById("lefttime").innerText = timeleft.toFixed(2);
				minus_time += 0.01;
			}, 10);



		}

		// replay options
		function replay() {

			document.getElementById("playagain").style.display = "none";
			document.getElementById("timerbtn").style.display = "block";
			document.getElementById("currscore").innerText = 0;
			document.getElementById("lefttime").innerText = "0.00"
		}
