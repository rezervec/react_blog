import React, { useEffect } from "react";
import style from '../style/PostPage.module.css'
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/UI/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, fetchPostPage } from "../actions/fetchAPI";

const PostPage = () => {
  const params = useParams()

  const dispatch = useDispatch()
  const postInfo = useSelector(post => post.postPage.page)
  const comments = useSelector(comment => comment.comments.comment)

  const [fetchPostId, isPostLoad, postError] = useFetch( async () => {
    dispatch(fetchPostPage(params.id))
  })

  const [fetchCommentId, isCommentLoad, commentError] = useFetch( () => {
    dispatch(fetchComments(params.id))
  })

  useEffect(() => {
    fetchPostId()
    fetchCommentId()
  }, [])

  return (
    <div>
      {isPostLoad
      ? <Loader/>
      : <div className={style.postPage}>
          <h3 className={style.titlePage}>{postInfo.title}</h3>
          <div className={style.bodyPage}>{postInfo.body}</div>
          <div className={style.idPage}>id: <b>{postInfo.id}</b></div>
        </div>
      }
      {postError &&
        <div><b>Возникла ошибка:</b> ${postError}</div>
      }

      {isCommentLoad
      ? <Loader/>
      : <div className={style.CommentsTitle}> <span>Коментарии:</span> <hr />
          {comments.map(comment => 
            <div className={style.postComment} key={comment.id}>
              <h4 className={style.emailComment}>{comment.email}</h4>
              <div className={style.bodyComment}>{comment.body}</div>
              <div className={style.idComment}>id: <b>{comment.id}</b></div>
            </div>
            )}
        </div>
      }
      {commentError &&
        <div><b>Возникла ошибка:</b> ${commentError}</div>
      }
    </div>
  )
}

export default PostPage