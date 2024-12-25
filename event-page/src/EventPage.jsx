import React from 'react'
import "./EventPage.css"
import Footer from './Footer';

import eventOptimus from './images/event_optimus.png';
import eventBumblebee from './images/event_bumblebee.png';
import eventDrift from './images/event_drift.png';
import eventCrosshair from './images/event_crosshair.png';
import eventTransformer from './images/event_transformer.png';
const EventPage = () => {
  return (
    <div>
      <body>
    <div className="event_page">
        <nav>
            <ul className="nav-links">
                <li className="logo"></li>
                <li className="home"><a href="#">HOME</a></li>
                <li className="events middle"><h1>EVENTS</h1></li>
                <li className="accommodation"><a href="#">ACCOMMODATION</a></li>
                <li className="contact-us"><a href="#">CONTACT US</a></li>
            </ul>
        </nav>
        <hr className="nav-hr"/>

        <div className="page1">
            <div className="overlay-image">
                <img  src={eventOptimus} alt="Above Card Image"/>
            </div>
            <div className="card">
                <div className="card-content">
                    <h2>Robo War</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestias hic distinctio
                        veritatis.</p>
                    <div className="card-buttons">
                        <button className="btn">Register</button>
                        <button className="btn">Rule Book</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="page2">
            <div className="cards-container-2">

                <div className="card-wrapper">
                    <div className="overlay-image-2">
                        <img src={eventBumblebee} alt="Above Card Image"/>
                    </div>
                    <div className="card-2">
                        <div className="card-content-2">
                            <h2>Robo Race</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestias hic distinctio
                                veritatis.</p>
                            <div className="card-buttons-2">
                                <button className="btn-2">Register</button>
                                <button className="btn-2">Rule Book</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="overlay-image-2">
                        <img src={eventDrift} alt="Above Card Image"/>
                    </div>
                    <div className="card-2">
                        <div className="card-content-2">
                            <h2>Line of Sight</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestias hic distinctio
                                veritatis.</p>
                            <div className="card-buttons-2">
                                <button className="btn-2">Register</button>
                                <button className="btn-2">Rule Book</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="overlay-image-2">
                        <img src={eventCrosshair} alt="Above Card Image"/>
                    </div>
                    <div className="card-2">
                        <div className="card-content-2">
                            <h2>Line Follower</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestias hic distinctio
                                veritatis.</p>
                            <div className="card-buttons-2">
                                <button className="btn-2">Register</button>
                                <button className="btn-2">Rule Book</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper">
                    <div className="overlay-image-2">
                        <img src={eventTransformer} alt="Above Card Image"/>
                    </div>
                    <div className="card-2">
                        <div className="card-content-2">
                            <h2>Robo Soccer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestias hic distinctio
                                veritatis.</p>
                            <div className="card-buttons-2">
                                <button className="btn-2">Register</button>
                                <button className="btn-2">Rule Book</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
<Footer />
    </div>
  )
}

export default EventPage
