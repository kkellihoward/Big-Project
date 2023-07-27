import React, { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Components from './LoginSignup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const SignUpForm = () => {
    const navigate = useNavigate()

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const createAccount = async e => {
        e.preventDefault();
        console.log(user, email, pwd);

        // if(validName == true && validEmail == true && validPwd == true && validMatch == true)
        // {
            try {
                const apiUrl = 'https://bp-api-87a503314fa5.herokuapp.com/user/createAccount'; 
                const data = { email, user, pwd };
            
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
                
                // You can return the response data or handle it further as per your requirements
                return response.data;
            } catch (error) {
            // Handle any errors that occurred during the API call
            console.error('API Error:', error);
            // throw error;
            }
        // }
        // else
        //     return;
    };

    return (
        <>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Components.Form onSubmit={createAccount}>
                {/* setting field values for sign up */}
                <Components.Title>Sign up</Components.Title>

                <Components.Input 
                    type='userName' 
                    placeholder='User Name'
                    ref={userRef}
                    autoComplete='off'
                    onChange={e => setUser(e.target.value)}
                    requiredaria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)} 
                />
                <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    &nbsp;4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                <Components.Input 
                    type='email'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    requiredaria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
                <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    &nbsp;Enter a valid email address.
                </p>

                <Components.Input 
                    type='password' 
                    placeholder='Password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"}/>
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    &nbsp;8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
                <Components.Input 
                    type='password' 
                    placeholder='Confirm Password'
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    &nbsp;Must match the first password input field.
                </p>
                <Components.Button type='submit' style={{backgroundColor: '#7f44d4'}}>Sign Up</Components.Button>
            </Components.Form>
        </>
    );
};