import Sidebar from "../components/sidebar";
import '../components/eventspage.css';
import '../components/style.css';
import EventsNavBar from "../components/EventNavBar";
import Cards from "../components/cards";

export default function EventsPage (){

    return(
        <>
        <div className="eventsContainer">
            <EventsNavBar />
            <Sidebar />
            <Cards />
        </div>
        </>
    );
}