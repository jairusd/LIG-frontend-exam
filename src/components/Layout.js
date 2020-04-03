import React from 'react'
import {Header, Slider} from './sections'
import FooterNavigation from './FooterNavigation'
import Posts from './Posts'

export default function Layout() {
  return (
    <>
      <section className="hero">
        <Header />
        <Slider />
      </section>

      <div className="container layout-sidebar">
        <section className="main-content">
          <Posts />
        </section>
        <section className="sidebar">
          test
        </section>
      </div>

      <section className="footer">
        <FooterNavigation />
      </section>
    </>
  )
}
