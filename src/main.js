import React from "react"
import ReactDOM from "react-dom"
import profileImage from "../src/images/himanshu.jpg"

export default function MainContent() {
    return (
        <main>
            <img src={profileImage} alt="Himanshu Singla" width="100%"></img>

            <div className="mainContent">
                <h1 id="profileName">Himanshu Singla</h1>
                <span id="designation">Frontend Developer</span>
                <a href="https://hsingla378.github.io/" target="_blank"><p id="websiteLink">hsingla378.github.io</p></a>

                <div>
                    <a href="mailto:hsingla378@gmail.com"><button id="emailButton">Email</button></a>
                    <a href="https://www.linkedin.com/in/akahimanshusingla" target="_blank"><button id="linkedinButton">Linkedin</button></a>
                </div>

                <div id="bioContent">
                    <h2>About</h2>
                    <p>He is a BCA Student and an early-stage web developer. 🙂 He believes in Sharing is Caring and is always curious to help and interact with new people. 🤗
                    </p>

                    <h2>Interest</h2>
                    <p>Badminton Lover. Coffee fanatic. Sleepy. Internet fanatic. Music scholar</p>
                </div>
            </div>
        </main>
    )
}