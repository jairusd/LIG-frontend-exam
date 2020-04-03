import React from 'react'
import ArticleImg from '../img/article.jpg'

export default function Posts({data}) {
  return (
    <div className="post">
      <img src={ArticleImg} alt="article" />
      <div className="post-content">
        <p className="post-date">2016.01.01</p>
        <h4 className="post-title">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</h4>
        <p className="post-text">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…</p>
      </div>
    </div>
  )
}
