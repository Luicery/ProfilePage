import React, {useState, useEffect} from "react"
import "../css/Main.css"
import sunImage from "../assets/Sun.png"
import landscapeNz from "../assets/nz.webp"
import moonImage from "../assets/Moon.png"
import myImage from "../assets/Me.jpg"

function Main() {
  return(
    <div>
      <nav>
        <ul>
          <li className="navigation"><img src={sunImage} alt="LightMode" width="20" height="20"></img></li>
          <li className="navigation"><img src={moonImage} alt="DarkMode" width="20" height="20"></img></li>
          <li className="navigation">About</li>
          <li className="navigation">Contact</li>
          <li className="navigation">Projects</li>
        </ul>
      </nav>
        <div id="openingHeaders">
          <h1 id="MainWelcome"> Welcome, <br/> to my humble portfolio </h1>
          <img id="MainImage" src={landscapeNz} alt="beautifulNZ"></img>
        </div>
      <div id="mainContent">
        <div id="introduction">
          <img id="myImage" src={myImage} alt="yoursTruly"></img>
          <h2>Hey, nice to meet you and welcome to my little profile page where you can find some information about me and what I do. Moving on I'm Ivan (Wee Kia my official name I never use) Wong a graduate of SEI35 in General Assembly Sydney and student of finance and economics in the University of Auckland, interested in tech and its ongoing evolution and finance for its risks and calculations.</h2>
        </div>
        <span id="techsIKnow">
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </span>
        <div id="projectsSection">
          <div>
            <h3>Project 0 Tic-Tac-Toe</h3>
            <div></div>
          </div>
          <div>
            <h3>Project 1 Domain API Real Estate Information Site </h3>
            <div></div>
          </div>
          <div>
            <h3>Project 2 Calendar Appointments and Directions</h3>
            <div></div>
          </div>
          <div>
            <h3>Project 3 Rakuten API Ecommerce Site</h3>
            <div></div>
          </div>
        </div>
        <div id="contactDetails">
          <h2>Contact and Other Information</h2>
          Linkedin: <a href="https://www.linkedin.com/in/ivanwong160519/">https://www.linkedin.com/in/ivanwong160519/</a><br/>
          Email: Luiivancery@gmail.com<br/>
          Github:
        </div>
      </div>
    </div>
  )
}
export default Main
