import React from 'react'
import { Link } from 'react-router-dom'
import "../../index.css"
import './index.scss'
import VLogo from '../../assets/images/V_LOGO_4.png'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
// 
const Home = () => {
  const [letterClass,setLetterClass]=useState('text-animate')
  const nameArray=['e','d','a','n','t']
  const jobArray=[' ','a',' ','B','l','o','c','k','c','h','a','i','n',' ','D','e','v','e','l','o','p','e','r']

  return (
    <div className="container home-page">
        <div className="text-content">
            <h1>
              <span className={letterClass}>J</span>
              <span className={`${letterClass} _11`}>S</span>
              <span className={`${letterClass} _12`}>R,</span>
              <br/>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
            {/* //////////////////////////////////////// */}
            <img src={VLogo} alt="VLogo" />
            {/* edant... Aspiring Blockchain Developer... */}
            <AnimatedLetters letterClass={letterClass} stringArray={nameArray}
            idx={15}/>
            <AnimatedLetters letterClass={letterClass} stringArray={jobArray}
            idx={20}/>
            </h1>
            <h2>Front•BackEnd Developer & Blockchain researcher...</h2>
            <Link to='/contact' className='flat-button'>SAY Hi...</Link>
        </div>
    </div>
  )
}

export default Home