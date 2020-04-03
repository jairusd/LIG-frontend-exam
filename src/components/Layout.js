import React from 'react'
import {
  Header, Slider, SideBar, MainContent
} from './sections'
import Footer from './Footer'
import ArrowTop from './ArrowTop'

export default function Layout() {
  return (
    <>
      <section className="hero">
        <Header />
        <Slider />
      </section>

      <div className="container layout-sidebar">
        <MainContent />
        <SideBar />
      </div>

      <ArrowTop />

      <section className="footer">
        <Footer />
      </section>
    </>
  )
}
