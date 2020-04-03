import React from 'react'
import {
  Header, Slider, SideBar, MainContent
} from './sections'
import FooterNavigation from './FooterNavigation'

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

      <section className="footer">
        <FooterNavigation />
      </section>
    </>
  )
}
