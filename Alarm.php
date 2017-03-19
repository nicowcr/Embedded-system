<?php
	if (isset($_POST['buttonAlarmOff']))
	{
		$value = false;
		$gpio = 12;
		exec(".../buttonAlarm.py .$value .$gpio");
	}
	elseif (isset($_POST['buttonAlarmOn']))
	{
		$value = true;
		$gpio = 12;
		exec(".../buttonAlarm.py .$value .$gpio");
	}
?>
