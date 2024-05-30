import React from 'react'
import Header from '../../Components/Header/Header'
import SectionOne from '../../Components/Sections/SectionOne/SectionOne'
import SectionThree from '../../Components/SectionThree/SectionThree'
import SectionTwo from '../../Components/SectionTwo/SectionTwo'
import SectionFour from '../../Components/SectionFour/SectionFour'
import SectionFifty from '../../Components/SectionFifty/SectionFifty'
import SectionFinal from '../../Components/SectionFinal/SectionFinal'

const Home = () => {
  return (
    <div>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFifty/>
      <SectionFinal/>
    </div>
  )
}

export default Home