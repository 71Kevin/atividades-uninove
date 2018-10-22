<html  = lang"pt-br">
<head>
    <meta charset="UTF-8">
    <title>Código da conexão e cadastro do usuário</title>
</head>
<body>

<?php
$host="localhost";
$user="root";
$pass="";
$banco="cadastro";
$conexao=mysqli_connect($host, $user, $pass) or die(mysqli_error());
mysqli_select_db($conexao,$banco) or die(mysqli_error());
?>

<?php
$nome=$_POST['nome'];
$senha=$_POST['senha'];
$sql=mysqli_query($conexao,"INSERT INTO usuarios(nome, senha)VALUES ('$nome', '$senha')");
echo "<script>alert('Você foi cadastrado com sucesso!');</script>";
?>

</body>
</html>﻿