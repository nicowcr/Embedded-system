//Volets
		function ButtonAuto()
		{
			document.getElementById("demoVolet").innerHTML = "Automatic mode";
		   $("#buttonAuto").click(
		   $.ajax({
			   url: '.../Shutters.php',
			   success: function(data) {
				  //do something
			   }
		   })
		   );
		};
		function ButtonManu()
		{
			document.getElementById("demoVolet").innerHTML = "Manuel mode";
		   $("#buttonManu").click(
		   $.ajax({
			   url: '.../Shutters.php',
			   success: function(data) {
				  //do something
			   }
		   })
		   );
		};
		function ButtonOpen()
		{
		   $("#buttonOn").click(
		   $.ajax({
			   url: '.../Shutters.php',
			   success: function(data) {
				  //do something
			   }
		   })
		   );
		};
		function ButtonClose()
		{
		   $("#buttonOff").click(
		   $.ajax({
			   url: '.../Shutters.php',
			   success: function(data) {
				  //do something
			   }
		   })
		   );
		};

		//Température
		function Values()
		{
			document.getElementById("demoTemp").innerHTML = "Values updated";
		   $("#values").click(
		   $.ajax({
			   url: '.../Température.php',
			   success: function(data) {
				  //do something
			   }
		   })
		   );
		};

		//Alarme
		function ButtonAlarmOn()
		{
			document.getElementById("demoAlarm").innerHTML = "Alarm ON";
		   $("#buttonAlarmOn").click(
		   $.ajax({
			   url: '.../Alarm.php',
			   success: function(data) {
				  //do something
			   }
		   })
		   );
		};

		function ButtonAlarmOff()
		{
			document.getElementById("demoAlarm").innerHTML = "Alarm OFF";
		   $("#buttonAlarmOff").click(
		   $.ajax({
			   url: '.../Alarm.php',
			   success: function(data) {
				  //do something
			   }
		   })
		   );
		};