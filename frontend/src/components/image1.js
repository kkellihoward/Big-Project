import React from 'react';
import Image1CSS from './image1.module.css';



function Image1()
{
   return(
        <>
            <div className = {Image1CSS.container}>
                    <img width="43%"src = {require('../assets/images/Part_1_alternate.jpg')} alt='website homepage'  />
                <div className ={Image1CSS.text}>
                    <center>
                    <p>Manage all your events!</p>
                    </center>
                    <p className={Image1CSS.subtext}>
                        <center>
                        <q>
                            It's super easy to set up and helps me stay organized
                        </q>
                        </center>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Image1;