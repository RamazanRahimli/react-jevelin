import React from 'react'
import styles from '../SectionFinal/Section.Final.module.scss'
import logo from '../../assets/IMAGE/tyler-nix-626668-unsplash2.jpg'

const SectionFinal = () => {
  return (
    <div className={styles.box}>
    <div className={styles.container}>
        <h1>What our
customers say</h1>
    <div className={styles.bottomBox}>
        <img src={logo} alt="" />
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien leo, iaculis rutrum lacus sed, fermentum tempor odio. Integer in ipsum eleifend ipsum mattis pulvinar at vitae magna. </p>
<h3>Ella Jonson</h3>
<h5>99</h5>
    </div>

    </div>

    </div>
  )
}

export default SectionFinal
