import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const VerificationPage = () => {
	const { token } = useParams();
	const [message, setMessage] = useState("");

	useEffect(() => {
		try{	
			const apiUrl = 'https://bp-api-87a503314fa5.herokuapp.com/user/verify-email/'; 
        		const verificationToken = token
                	const data = { verificationToken };
	
			const response = axios.post(apiUrl, data, { headers: {
	                  'Content-Type': 'application/json'
	                  }}
	                );
	                
	                if(response.status === 200)
	                {
				// Handle the response from the API as needed
		                console.log('API Response:', response.data);
				// setMessage(response.data);
	                }
		}
		catch (error) {
	            // Handle any errors that occurred during the API call
	            console.error('API Error:', error);
	            // throw error;
		    // setMessage(error);
	        }

	}, [])

	return (
		<div>		
			<h1>Your account has been sucessfully verified!</h1>
		</div>
	)
}

export default VerificationPage;
