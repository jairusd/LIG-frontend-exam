import React from 'react'
import {footerLinks} from '../constants'

function FooterNavigation() {
  return (
    <ul className="footer-links">
      {footerLinks.map(link => <li key={link}><a href='#'>{link}</a></li>)}
    </ul>
  )
}

export default function Footer() {
  return (
    <div className="container footer-container">
      <FooterNavigation />
      <p>&copy;2016 Sample</p>
    </div>
  )
}
