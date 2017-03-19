<?php
	if (isset($_POST['values']))
	{
		echo $_GET['valMin'];
		echo $_GET['valMax'];;
		$gpio = 12;
		
		exec(".../temperature.py .$valMin .$valMax .$gpio");
	}
?>