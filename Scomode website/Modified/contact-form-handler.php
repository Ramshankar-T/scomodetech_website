<?php 
$errors = '';
$myemail = 'sathiyaraj.l@nuratechlabs.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['phone']) || 
   empty($_POST['company']) || 
   empty($_POST['designation']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email = $_POST['email'];
$code = $_POST['hidid']; 
//$val=$hidval;
//$rslt=explode("+",$val); 
$phone = $_POST['phone']; 
//$phone = $rslt[1].$phones; 
$company = $_POST['company'];
$designation = $_POST['designation'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Received From: $company";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email \n Phone : $phone \n Company : $company\n Designation : $designation"; 
	
	$headers = "From: $myemail\n"; 
	$headers = "Reply-To: $email";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
      //  echo "<script>alert('Thank you for submitting the form. We will contact you soon!');</script>";	  
	header('Location: remote-tower-management-system.html');
	$result='<div class="alert alert-success" id="selectCodeNotificationArea"><button type="button" class="close" data-hide="alert">&times;</button><strong>Thank you for submitting the form. We will contact you soon!</strong></div>';
} 
else
{	
	$result='<div class="alert alert-success" id="selectCodeNotificationArea"><button type="button" class="close" data-hide="alert">&times;</button><strong>Sorry there was an error sending your message. Please try again later</strong></strong></div>';
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>