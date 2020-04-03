import React, {useState} from 'react'
import {sliderBG} from '../../constants'
import cn from 'classnames'

export default function Slider() {
  const [bg, setBg] = useState(sliderBG[0])
  return (
    <section className="section section__slider">
      <div className={cn('slider', `bg--${bg}`)}>
        <h1>キャッチコピーが入ります。</h1>
      </div>
    </section>
  )
}
