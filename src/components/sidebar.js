import React from "react";
import './eventspage.css';
import { useNavigate } from 'react-router-dom';

export default function Sidebar () {

    const SideBarData = [
        {
            title:  "Home",
            icon:   <svg width="32" height="30" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3_132)">
                    <path d="M5 6.11703L13.3733 1L21.7467 6.11703" stroke="#B0B0B0" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.8859 9.37332V15.3277C19.8859 15.636 19.636 15.8859 19.3277 15.8859H7.41894C7.11064 15.8859 6.86072 15.636 6.86072 15.3277V9.37332" stroke="#B0B0B0" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_3_132" x="0.499939" y="0.5" width="25.7468" height="23.8859" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_132"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_132" result="shape"/>
                    </filter>
                    </defs>
                    </svg>,
            link: '/Events'
        },
        {
            title:  "Join Event",
            icon:   <svg width="25" height="27" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 15.89V14.9594C1 11.3616 3.91659 8.44498 7.51438 8.44498C11.1122 8.44498 14.0288 11.3616 14.0288 14.9594V15.89" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.51437 8.445C9.57021 8.445 11.2369 6.77834 11.2369 4.7225C11.2369 2.66662 9.57021 1 7.51437 1C5.45849 1 3.79187 2.66662 3.79187 4.7225C3.79187 6.77834 5.45849 8.445 7.51437 8.445Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                    link:"/Events"
        },
        {
            title:  "Add Event",
            icon:   <svg width="23" height="22" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8.445H9.09644M9.09644 8.445H17.1929M9.09644 8.445V1M9.09644 8.445V15.89" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
            link:"/Events"
        },
        {
            title:  "Archive",
            icon:   <svg width="22" height="22" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.89 8.445L1 15.89L3.79188 8.445L1 1L15.89 8.445Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.74292 8.26947H15.89" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                    link:"/Events"
        },
        {
            title:  "Settings",
            icon:   <svg width="22" height="22" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.44499 10.6785C9.67855 10.6785 10.6785 9.67856 10.6785 8.445C10.6785 7.21143 9.67855 6.2115 8.44499 6.2115C7.21142 6.2115 6.21149 7.21143 6.21149 8.445C6.21149 9.67856 7.21142 10.6785 8.44499 10.6785Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.1199 7.25038L13.3026 5.277L14.401 3.978L12.912 2.489L11.6201 3.59306L9.60478 2.76427L9.14133 1H7.68635L7.21591 2.78764L5.24693 3.61763L3.978 2.489L2.489 3.978L3.57103 5.3098L2.76633 7.28827L1 7.7005V9.1895L2.78763 9.67752L3.61748 11.6461L2.489 12.912L3.978 14.401L5.31152 13.3143L7.25157 14.1124L7.7005 15.89H9.1895L9.63955 14.113L11.6129 13.2958C11.9418 13.5309 12.912 14.401 12.912 14.401L14.401 12.912L13.2961 11.6087L14.1135 9.63471L15.8899 9.17253L15.89 7.7005L14.1199 7.25038Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                    link:"/"
        }
    
    ]

    const navigate = useNavigate()

    const handleLogin = () => {
        
            navigate('val.link')
    }

    return(
        <div className="sideContainer">
            <div className="sidebarList">
            {SideBarData.map((val, key) =>{
               return(
                 <div 
                 key={key}
                 className="row"
                 id={window.location.pathname == val.link ? "active" : ""}
                 onClick={() =>{window.location.pathname = val.link}}
                 > 
                <div className="icons">
                    {val.icon}
                </div>
                <div className="title">
                    {val.title}
                </div>
                 </div>
               );
            })}
            </div>
        </div>
    );
}