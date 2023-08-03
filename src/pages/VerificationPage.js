import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const VerificationPage = () => {
	const { token } = useParams();
	const [message, setMessage] = useState("");

	useEffect(() => {
		console.log("here")
		axios.get(`https://bp-api-87a503314fa5.herokuapp.com/user/verify-email/${token}`)
		.then(function (response) {
			console.log("api call in email verification page");
			console.log(response.data);
			setMessage(response.data.message);
		})
		.catch(function (error) {
			console.log("error in api call in email verification page");
			console.log(error);
		})

	}, [])

	return (
		<div>		
			<h1>Thank you for verifying your email!</h1>
		</div>
	)
}

export default VerificationPage;
