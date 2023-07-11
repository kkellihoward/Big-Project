import React from 'react';
import Image2CSS from './image2.module.css';

function Image2()
{

    return(
        <>
            <div className = {Image2CSS.container}>
                    <img src = {require('../assests/images/Part_7.jpg')} alt = 'website event information' width='40%'/>
                <div className= {Image2CSS.text}>
                    <p>
                        Stay connected with all your friends like 
                        <br />
                        <center>
                        never before
                        </center>
                        <p className={Image2CSS.subtext}>
                            Can also help manage your professional and personal life
                        </p>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Image2;