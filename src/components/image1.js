import React from 'react';
import Image1CSS from './style.css';

function Image1()
{
   return(
        <>
            <div className={Image1CSS.image1container}> 
            <div className = 'image1'> 
                <img src = {require('../assets/images/lpage.jpg')} alt='background'  />
            </div>
            </div>
        </>
    );
};

export default Image1;