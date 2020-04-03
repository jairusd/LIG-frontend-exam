import React from 'react'
import Post from './Post'
import {posts} from '../constants'

export default function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post data={post} />
      ))}
    </div>
  )
}
