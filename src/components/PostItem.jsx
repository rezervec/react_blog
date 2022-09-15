import React from "react";

const PostItem = ({...props}) => {

  return (
    <div>
    {props.posts.map((post, index) =>
      <div className="postItem" key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <b>id: {index}</b>
      </div>
    )}
    </div>
  )
}

export default PostItem;