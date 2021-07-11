import React from 'react'
import "./main.css"

function Main() {
    return (
        <div className="main">
            <div className="main-info">
                👋 Hello! <br /> I am <span className="name"> Prem Kothawle</span> .
                <br />
                Full Stack Developer | ML & AI Enthusiast
                <div className="contacts">
                    <a href="https://github.com/kothawleprem"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/premkothawle/"> <i class="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/_prem_29"><i class="fab fa-instagram"></i></a>
                    <a href="https://projectsbay.herokuapp.com/user/prem"><i class="fab fa-product-hunt"></i></a>
                    <a href="mailto:kothawleprem@gmail.com"><i class="fas fa-envelope" ></i></a>
                    
                </div>
            </div>
            <div className="main-img">
                <img src={require('../../../assets/prem.jpg').default} className='picture' alt="" />
            </div>
        </div>
    )
}

export default Main
