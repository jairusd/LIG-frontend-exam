import React, {useState} from 'react'
import Post from './Post'
import {posts} from '../constants'
import buttonArrow from '../img/button-arrow.png'

export default function Posts() {
  const [page, setPage] = useState(1)

  const showMore = () => {
    setPage(page + 1)
  }

  return (
    <div className="posts-container">
      <div className="posts">
        {
          posts
            .slice(0, page * 10)
            .map((post, i) => <Post key={i} data={post} />)
        }
      </div>

      <button type="button" onClick={showMore} className="show-more">
        More

        <img src={buttonArrow} className="button-arrow" alt="show more" />
      </button>
    </div>
  )
}
