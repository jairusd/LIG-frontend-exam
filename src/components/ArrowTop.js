import React from 'react'
import Arrow from '../img/arrow-top.png'

export default function ArrowTop() {
  const goToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div className="container go-to-top-container">
      <button type="button" className="go-to-top" onClick={goToTop}>
        <img src={Arrow} alt="go to top" />
      </button>
    </div>
  )
}
