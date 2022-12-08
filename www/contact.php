<?php
session_start();  // Commencer session pour récupérer données

$bdd = new PDO("mysql:host=arthurcarthur.mysql.db;dbname=arthurcarthur", 'arthurcarthur', 'XXX');


// Définition variable 

$errorsEmail = [];
$errorsSujet = [];


if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) && mb_strlen(trim($_POST['email'])) >= 2){
    
    $errorsEmail['email'] = "<i class=\"ion-close-circled\"></i>";
}

if(!array_key_exists('email', $_POST) or mb_strlen(trim($_POST['email'])) <= 2) {
    
    $errorsEmail['email'] = "Veuillez renseigner votre email";
}

if( $_POST['sujet'] == 'rien' ){
    
    $errorsSujet['sujet'] = "Veuillez choisir un sujet";

}





if(!empty($errorsEmail) or !empty($errorsSujet) ){

// Définitions des erreurs
	$_SESSION['errorsEmail'] = $errorsEmail;
	$_SESSION['errorsSujet'] = $errorsSujet;
	$_SESSION['inputs'] = $_POST;


	header('Location: https://www.arthur-chotard.com/#contact'); // Relocalisation lors chargement de la page 
}


else{


	$_SESSION['success'] = 1;

// Récupération des valeurs

$email = trim(htmlspecialchars($_POST['email']));
$sujet = trim(htmlspecialchars($_POST['sujet']));

$insertmbr = $bdd->prepare(" INSERT INTO  contact(email, sujet) VALUES(?, ?)" );                   
$insertmbr ->execute(array($email, $sujet));

// Définition horaire

 $date = date('d/m/Y');
 $heure = date("H:i");

 // Option pour mail 
		$header="MIME-Version: 1.0\r\n";
		$header='From: ' . $_POST['email'].''."\r\n";
		$header.='Content-Type:text/html; charset="uft-8"'."\n";
		$header.='Content-Transfer-Encoding: 8bit';
		$header.='Reply-To: ' . $_POST['email'] . "\n" ;


// Corps du mail
	$message='
		<html>
			<body>
				<div align="center">
					<br />
					
					<b>Mail de l\'expéditeur :</b> <br>'.$_POST['email'].'<br /><br />
					<b>Sujet :</b> <br>'.$_POST['sujet'].'<br /> <br />
					<b>Date : </b> <br> '.$date.' <br /><br />
					<b>Heure :</b> <br>'.$heure.' <br /><br />

				</div>
			</body>
		</html>
		';

mail('contact@arthur-chotard.com', 'Formulaire contact', $message, $header); // Envoie du mail 


header('Location: https://www.arthur-chotard.com/#contact'); // Relocalisation lors chargement de la page 

}

?>
