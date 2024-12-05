import React from "react";
import './intro.css'
import {Link} from 'react-scroll'
import tiktok from '../../assets/tiktok.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'
import wilmar from '../../assets/wilmar.jpg'

function Intro() {
    return(
        <section id='intro'>
            <div className="intro--info">
                <div className="intro--socials">
                    <img src={tiktok}/> 
                    <img src={youtube}/> 
                    <img src={twitter}/> 
                </div>
                <div className="intro--description">
                    <small>Hello I'm </small>
                    <h1>Shantanu Jana</h1>
                    <h5>Frontend Developer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde sequi beatae magnam qui aliquid accusantium alias esse! Explicabo, quod veniam temporibus accusamus aspernatur repudiandae.</p>
                    <Link>Contact Me</Link>
                </div>
            </div>  
            <img className="intro--pic" src={wilmar}/> 
        </section>
    )
}

export default Intro