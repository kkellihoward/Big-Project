import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const VerificationPage = () => {
	const { token } = useParams();
	const [message, setMessage] = useState("");

	useEffect(() => {
		try{	
			console.log("here")
			console.log(token)
			// axios.get(`https://bp-api-87a503314fa5.herokuapp.com/user/verify-email/${token}`)
			// .then(function (response) {
			// 	console.log("api call in email verification page");
			// 	console.log(response.data);
			// 	setMessage(response.data.message);
			// })
			// .catch(function (error) {
			// 	console.log("error in api call in email verification page");
			// 	console.log(error);
			// })

			const apiUrl = 'https://bp-api-87a503314fa5.herokuapp.com/user/verify-email/'; 
        		const verificationToken = token
                	const data = { verificationToken };
	
			const response = await axios.post(apiUrl, data, { headers: {
	                  'Content-Type': 'application/json'
	                  }}
	                );
	                
	                if(response.status === 200)
	                {
	                  navigate('/Events');
	                }
	
			// Handle the response from the API as needed
	                console.log('API Response:', response.data);
		}
		catch (error) {
	            // Handle any errors that occurred during the API call
	            console.error('API Error:', error);
	            // throw error;
	        }

	}, [])

	return (
		<div>		
			<h1>Thank you for verifying your email!</h1>
		</div>
	)
}

export default VerificationPage;
