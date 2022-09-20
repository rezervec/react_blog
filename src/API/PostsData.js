import axios from "axios";

export default class PostData {
  static async getPosts(postsLimit, activePage) {
    // делаем запрос по адресу, записываем значение
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: postsLimit,
        _page: activePage
      }
    })
    return response
  }

  static async getPostById(id) {
    // делаем запрос по адресу конкретной статьи, записываем значение
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response
  }

  static async getCommentById(id) {
    // делаем запрос комментариев к конкретной статье, записываем значение
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return response
  }
}