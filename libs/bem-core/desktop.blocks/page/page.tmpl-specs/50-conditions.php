<!DOCTYPE html>
<html class="ua_js_no">

	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Пример подключения es5-shims для IE</title>
		<script>
			(function(e, c)
			{
				e[c] = e[c].replace(/(ua_js_)no/g, "$1yes");
			})(document.documentElement, "className");
		</script>
		<!--[if lt IE 9]><script src="//yastatic.net/es5-shims/0.0.1/es5-shims.min.js"></script><![endif]-->
	</head>

	<body class="page"></body>

</html>