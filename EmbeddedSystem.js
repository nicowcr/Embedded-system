//Volets
		function ButtonAuto()
		{
			document.getElementById("demoVolet").innerHTML = "Automatic mode";
		   $("#buttonAuto").click(
		   $.ajax({
			   url: '.../buttonAuto.php',
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
			   url: '.../buttonManu.php',
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
			   url: '.../buttonOpen.php',
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
			   url: '.../buttonClose.php',
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
			   url: '.../values.php',
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
			   url: '.../buttonAlarmOn.php',
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
			   url: '.../buttonAlarmOff.php',
			   success: function(data) {
				  //do something
			   }
		   })
		   );
		};