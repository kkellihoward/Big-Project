import React from 'react';
import Image1CSS from './style.css';

function Image1()
{
   return(
        <>
            <div className = {Image1CSS.image1container}>
                <img src = {require('../assets/images/lpage.jpg')} alt='background'  />
            </div>
        </>
    );
};

export default Image1;