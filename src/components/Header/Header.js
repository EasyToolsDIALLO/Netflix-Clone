import React from 'react';
import { useState, useEffect } from 'react';
import './HeaderStyle.css';
import NetFlixLogo from '../../assets/netflix_trans.png'
import ProfilLogo from '../../assets/ousmane.jpg'

function Header() {

    const [visible,setVisible] = useState(false);

    const handleVisibility = ()=>{
        if(window.scrollY >100)
            setVisible(true);
        else
            setVisible(false);
    }

    useEffect(() => {

        window.addEventListener('scroll',handleVisibility);
        return () => {
            window.removeEventListener('scroll',handleVisibility);
        };
    }, [])

  return (
    <div className={`nav ${visible && 'nav__bar'}`}>
        <div className='header'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="NetFlixLog" className='header__logo'/>
            <img src={ProfilLogo} alt="ProfilLogo" className='header__profil'/>
        </div>
    </div>
    
  )
}

export default Header