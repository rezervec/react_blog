import React, { useEffect, useState } from "react";
import style from '../style/PostPage.module.css'
import { useParams } from "react-router-dom";
import PostData from "../API/PostsData";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/UI/loader/Loader";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState({})
  const params = useParams()
  const [fetchId, isLoad, error] = useFetch( async () => {
    const response = await PostData.getPostById(params.id)
    setPostInfo(response.data)
  })

  useEffect(() => {
    fetchId()
  }, [])

  return (
    <div>
      {isLoad
        ? <Loader/>
        : <div className={style.postPage}>
            <h3 className={style.title}>{postInfo.title}</h3>
            <div className={style.body}>{postInfo.body}</div>
            <div className={style.id}>id: <b>{postInfo.id}</b></div>
          </div>
      }
      {error &&
        <div><b>Возникла ошибка:</b> ${error}</div>
      }
    </div>
  )
}

export default PostPage