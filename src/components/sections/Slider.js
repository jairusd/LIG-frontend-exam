import React, {useState} from 'react'
import cn from 'classnames'
import {sliderBG} from '../../constants'
import arrowLeft from '../../img/arrow-left.png'
import arrowRight from '../../img/arrow-right.png'

function Dots({onChangeBg}) {
  return (
    <div className="dots-container">
      <button className="button-dot" label={sliderBG[0]} type="button" onClick={() => onChangeBg(0)} />
      <button className="button-dot" label={sliderBG[1]} type="button" onClick={() => onChangeBg(1)} />
      <button className="button-dot" label={sliderBG[2]} type="button" onClick={() => onChangeBg(2)} />
    </div>
  )
}

export default function Slider() {
  const [bg, setBg] = useState(0)

  const doChangeBg = (newBg, direction = 0) => {
    if (!sliderBG[bg + direction]) return
    setBg(newBg === null ? bg + direction : newBg)
  }

  return (
    <section className="section section__slider">
      <div className={cn('slider', `bg--${sliderBG[bg]}`)}>
        <button type="button" className="arrow-button" onClick={() => doChangeBg(null, -1)} disabled={bg === 0}>
          <img src={arrowLeft} alt="left arrow" />
        </button>

        <div className="slider-content">
          <h1 className="title-slider">キャッチコピーが入ります。</h1>
          <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
          <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
        </div>

        <button type="button" className="arrow-button" onClick={() => doChangeBg(null, 1)} disabled={bg === 2}>
          <img src={arrowRight} alt="right arrow" />
        </button>
      </div>

      <Dots onChangeBg={doChangeBg} />
    </section>
  )
}
