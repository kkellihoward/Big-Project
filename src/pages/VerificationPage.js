import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const VerificationPage = () => {
	const { token } = useParams();
	const [message, setMessage] = useState("");

	useEffect(() => {

		axios.get(`https://big-project1-2fc2828cbba2.herokuapp.com/verify-email/${token}`)
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
			<h1>Event Planning</h1>
			<h2>Verification Page</h2>
			<h3>{message}</h3>
		</div>
	)
}

export default VerificationPage;
