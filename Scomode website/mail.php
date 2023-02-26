<?php
	$name = $_POST[ 'name' ];
	$email = $_POST[ 'email' ];
	$phone = $_POST[ 'phone' ];
	$company = $_POST[ 'company' ];
	$designation = $_POST[ 'designation' ];

	$msgBody = '';
	$msgBody .= '<table>
					<tr>
						<td>Name</td>
						<td>' . $name . '</td>
					</tr>
					<tr>
						<td>Email</td>
						<td>' . $email . '</td>
					</tr>
					<tr>
						<td>Phone</td>
						<td>' . $phone . '</td>
					</tr>
					<tr>
						<td>Company</td>
						<td>' . $company . '</td>
					</tr>
					<tr>
						<td>Designation</td>
						<td>' . $designation . '</td>
					</tr>
				</table>';
	$headers = "";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $asda = mail( 'info@scomode.com', 'Contact form mail', $msgBody, $headers);
	if( $asda ) {
		echo true;
	} else {
		echo false;
	}
?>