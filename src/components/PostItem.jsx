import React from "react";
import { useNavigate } from "react-router-dom";

const PostItem = ({posts, deletePost}) => {
  const navigator = useNavigate()
  if (!posts.length)
    {
      return <div className="noPosts">Статей нет.</div>
    }

  return (
    <div>
    {/* выводим каждый элемент массива */}
    {posts.map((post) =>
      <div className="postItem" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        {/* отображаем индекс чтобы на front-е выглядело читабельнее    ! BEFORE RELEASE !    */}
        <b>id: {post.id}</b>
        {/* при нажатии срабатывает callback-функция, в которую передаём статью */}
        <div className="del-read_btns">
          <button className='read-btn' onClick={() => navigator(`/post/${post.id}`)}>Читать</button>
          <button className='del-btn' onClick={() => deletePost(post)}>Удалить</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default PostItem;