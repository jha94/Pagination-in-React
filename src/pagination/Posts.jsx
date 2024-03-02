import React from 'react'

const Posts = ({posts}) => {
  return (
    <div>
        {posts.map(({title})=><p key={title} >{title}</p>)}
    </div>
  )
}

export default Posts