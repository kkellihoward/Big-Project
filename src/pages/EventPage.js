import React from "react";
import Sidebar from "../components/sidebar";
import '../components/eventspage.css';
import '../components/style.css';
import EventsNavBar from "../components/EventNavBar";
import Cards from "../components/cards";
import PopupAd from "../components/PopupAd";

export default function EventsPage (){

    return(
        <>
        <div className="eventsContainer">
            <EventsNavBar />
            <Sidebar />
            {/* <PopupAd />  */}
            <Cards />
        </div>
        </>
    );
}
