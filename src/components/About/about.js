import React from "react";
import './about.css'
import yellowHeadband from '../../assets/yellow-headband.jpg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import { Link } from "react-scroll";

function About() {
    return(
        <section id='about'>
            <div className="about--header">
                <h1>About Me</h1>
                <p>Introduction</p>
            </div>
            <div className="about--info">
                <img className="about--main-img" src={yellowHeadband}/>
                <div className="about--info-details">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel doloremque harum possimus voluptatum eum perferendis laboriosam. Impedit cupiditate quisquam eligendi facere ullam voluptatibus blanditiis non magnam, distinctio quos commodi quia adipisci quasi cum cumque modi porro quam nulla id nulla eos, ad optio quam.</p>
                    <div className="about--contact-list">
                        <p>
                            <img src={facebook}/> Tasnia Farin
                        </p>
                        <p>
                            <img src={instagram}/> +1 444 444 444
                        </p>
                        <p>
                            <img src={linkedin}/> project@farin.com
                        </p>
                    </div>
                    <Link className="blue-button">Download CV</Link>
                </div>
            </div>
        </section>
    )
}

export default About