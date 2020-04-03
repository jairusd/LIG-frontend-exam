import React from 'react'
import ArticleImg from '../../img/article.jpg'

function Recommended() {
  return (
    <div>
      <h2 className="title-recommended">Recommended</h2>
      {Array(3).fill('').map((e, i) => (
        <div key={i} className="recommended">
          <img src={ArticleImg} alt="sample" className="article-img" />
          <div>
            <p className="title">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
            <p className="date">2016.03.26</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function DummyBanners() {
  return (
    <div className="dummy-banner-container">
      {Array(3).fill('').map((e, i) => (
        <div key={i} className="dummy-banner">Dummy banner</div>
      ))}
    </div>
  )
}

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="sidebar-container">
        <div className="banner-1">
          Dummy banner
        </div>

        <Recommended />

        <DummyBanners />
      </div>
    </section>
  )
}
