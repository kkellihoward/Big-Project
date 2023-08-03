import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const VerificationPage = () => {
	
	const [message, setMessage] = useState("");

	useEffect(() => {
		const data = { token };
		const response = await axios.get(`https://big-project1-2fc2828cbba2.herokuapp.com/verify-email`, data,{ headers: {
        'Content-Type': 'application/json'
        }}
      );
			
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
						
			<h1>{message}</h1>
			<h2>here</h2>
		</div>
	)
}

export default VerificationPage;
