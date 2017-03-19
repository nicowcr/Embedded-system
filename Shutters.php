<?php
	if (isset($_POST['buttonAuto']))
	{
		$value = false;
		$gpio = 12;
		exec(".../shutters.py .$value .$gpio");
	}
	elseif (isset($_POST['buttonManu']))
	{
		$value = true;
		$gpio = 12;
		if (isset($_POST['buttonOpen']))
		{
			value2 = true;
			exec(".../shutters.py .$value .$gpio .$value2");
		}
		elseif(isset($_POST['buttonClose']))
		{
			value2 = false;
			exec(".../shutters.py .$value .$gpio .$value2");
		}
	}
?>