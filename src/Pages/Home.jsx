import React from 'react'
import logo from '../Jamorlogo.svg';
import './Styles/Home.css'
import candles from './Images/sl_022321_41020_27-removebg-preview 1.png'
import jm from './Images/IMG_4661.JPG';
export default function Home() {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="" />

        <a href="./">Join The Academy</a>
      </div>

      <div className="hero">
        <div className="left">
          <h1>Learn, Trade, Grow <br />
            With <span>Jamor’s Trading <br /> Academy</span></h1>

          <p>Jamor’s Trading Academy creates a <br /> space for you to participate in the world of <br /> Crypto and Forex Trading</p>

          <a href="./">Tired Of Waiting? Join The Academy</a>
        </div>

        <img src={candles} alt="" />
      </div>

      <div className="jamor">
        <img src={jm} alt="" />

        <div className="right">
          <h2>Who Is Jamor?</h2>
          <p>Jamor Is a Financial trader with 3+ years of experience in <br /> Financial analysis, he has made over $80,000 in <br /> profits since 2020</p>

          <a href='./'>Get In Touch</a>

        </div>
      </div>

      <div className="signals">
        <h1><span>Lifetime</span> Signals</h1>
        <p>You thought we’re done when we started providing tutoring services? <br />
          well, you thought wrong <br />
          we also give accurate Forex Trading signals, analysed carefully by our team of  Technical analysts</p>
        <a href="./">Be A Part Of It</a>
      </div>

      <div className="pricing">
        <div className="pclass">
          <h4>Private Classes</h4>

          <div className="price">
            $250
          </div>

          <ul>
            <li>Free Signals</li>
            <li>Lifetime Mentorship</li>
            <li>One on One Tutoring sessions</li>
            <li>Advanced Resources</li>
            <li>Real Time Trading Playground</li>
          </ul>

          <a href="./">Join The Academy</a>
        </div>

        <div className="right">
          <div className="cat" style={{background: "#504593"}}>
            <div className="price">
              $100
            </div>
            <h4>Public Classes</h4>
            <a href="./">Join The Academy</a>
          </div>


          <div className="cat">
            <div className="price">
              $70
            </div>
            <h4>Lifetime Signals</h4>
            <a href="./">Join The Academy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
