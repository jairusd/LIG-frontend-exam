import React from 'react'
import ArticleImg from '../../img/article.jpg'

function Recommended() {
  return (
    <div>
      <h2 className="title-recommended">Recommended</h2>
      {Array(3).fill('').map((e, i) => (
        <a key={i} href="#" className="recommended">
          <img src={ArticleImg} alt="sample" className="article-img" />
          <div>
            <p className="title">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
            <p className="date">2016.03.26</p>
          </div>
        </a>
      ))}
    </div>
  )
}

function DummyBanners() {
  return (
    <div className="dummy-banner-container">
      {Array(3).fill('').map((e, i) => (
        <a key={i} href="#" className="dummy-banner">Dummy banner</a>
      ))}
    </div>
  )
}

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="sidebar-container">
        <a href="#" className="banner-1">
          Dummy banner
        </a>

        <Recommended />

        <DummyBanners />
      </div>
    </section>
  )
}
