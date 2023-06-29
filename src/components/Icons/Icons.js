import './Icons.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { Component }  from 'react';

function Icons() {
    return(
        <div className='rowC'>
            <a
                className="App-link"
                href="https://instagram.com/umdocedom"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon sx={{ fontSize: 30 }}/>
            </a>
            <a
                className="App-link"
                href="https://facebook.com/umdocedom"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon sx={{ fontSize: 30 }}/>
            </a>
            <a
                className="App-link"
                href="https://wa.me/5519982947878"
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsAppIcon sx={{ fontSize: 30 }}/>
            </a>
        </div>
    )
}

export default Icons;