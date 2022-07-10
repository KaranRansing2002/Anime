import React from 'react'
import onepiece from './videos/one-piece.mp4'
import Bleach from './videos/Bleach.mp4'
import naruto from './videos/naruto.mp4'
import anim1 from './videos/anim1.webm'
import anim4 from './videos/anim4.mp4'
import './videocarousel.css'
import Button from '@mui/material/Button';
import { PieChartRounded } from '@material-ui/icons'


function VideoCarousel() {
  const videos=[anim1,onepiece,naruto,Bleach];
  return (
    <div className='vids'>
      <video src={naruto} autoPlay />
      <h1>Let's Get Started</h1>
      <div className='btn'>
        <button className='btns'>Login</button>
        <button className='btns'>Sign-up</button>
      </div>
    </div>
  )
}

export default VideoCarousel
