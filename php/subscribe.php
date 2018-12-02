<?php

  /*
  * Check the Google ReCaptcha v3 and validate if this is not a robot
  */
  if(isset($_GET['g-recaptcha-response'])){
    $secretKey = "6Lfsu3QUAAAAAIxjV7mfo_dEDo-123nEne7D7IchX"; // Put your secret key here
    $ip = $_SERVER['REMOTE_ADDR'];
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secretKey . "&response=" . $_GET['g-recaptcha-response'] . "&remoteip=" . $ip);
    $responseKeys = json_decode($response , true);
    // It looks like this is a robot
    if (!isset($responseKeys['score']) || $responseKeys['score'] < 0.5) {
      $responseKeys['status'] = 'recaptcha-problem';
      echo json_encode($responseKeys);
      exit();
    }
  }

  /*
  * Send email to the administrator
  */
  $admin_mail = ''; // put your admin email here
  $email = $_GET['EMAIL']; // Get email address from form
  $id = md5(strtolower($email)); // Encrypt the email address
  if (isset($_GET['MESSAGE']) && $admin_mail) {
    $message = $_GET['MESSAGE']; //Get message from form
    $message = wordwrap($message, 70, "\r\n");
    mail($admin_mail, 'Contact form', $message,
     "From: "  . $email . "\r\n"
     . "Reply-To: "  . $email . "\r\n"
     . "X-Mailer: PHP/" . phpversion()
    );
  }

  /*
  * Connect to mailchimp and add a new subscriber
  */
  include('./MailChimp.php');
  // namespace defined in MailChimp.php
  use \DrewM\MailChimp\MailChimp;
	$MailChimp = new MailChimp('e5998b132347c052a7572a3bdcfa82aa-us19'); // put your API key here
	$list = 'df7a723c50'; // put your list ID here
  // setup the merge fields
	$mergeFields = array(
    'FNAME' => isset($_GET['FNAME']) ? $_GET['FNAME'] : '',
    'LNAME' => isset($_GET['LNAME']) ? $_GET['LNAME'] : '' ,
    'PHONE' => isset($_GET['PHONE']) ?  $_GET['PHONE'] : '',
    'ADDRESS' => isset($_GET['ADDRESS']) ?  $_GET['ADDRESS'] : ''
  );
	// remove empty merge fields
  $mergeFields = array_filter($mergeFields);
	$result = $MailChimp->put("lists/$list/members/$id", array(
  	'email_address'     => $email,
    'status'            => 'subscribed',
    //'merge_fields'      => $mergeFields, 
  	'update_existing'   => true, // YES, update old subscribers!
  ));

  /*
  * Give respond to the javascript function
  */
  $result = isset($_GET['MESSAGE']) || !isset($result) ? array('status' => 'subscribed') : $result;

	echo json_encode($result);