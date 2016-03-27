<!DOCTYPE html>
<html class="ua_js_no">

	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Hello, World!</title>
		<script>
			(function(e, c)
			{
				e[c] = e[c].replace(/(ua_js_)no/g, "$1yes");
			})(document.documentElement, "className");
		</script>
		<link rel="stylesheet" href="index.css" />
	</head>

	<body class="page">
		<div class="landing">
			<div class="landing__header">
				<?php include(landing__header.php);?>
			</div>
		</div>
	</body>

</html>