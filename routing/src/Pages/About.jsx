import React from 'react'
import { Link } from "react-router-dom";

import AppCardSmall from '../Components/AppComponents/AppCardSmall';

function About() {
  return (
    <>
      <div>Ini Halaman About</div>
      <Link to="/">Balik Ke home</Link>
      <AppCardSmall />
    </>

  )
}

export default About