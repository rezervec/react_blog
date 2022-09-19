import axios from "axios";

export default class PostData {
  static async getPosts(postsLimit, activePage) {
    // делаем запрос по адресу, записывапем значение
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: postsLimit,
        _page: activePage
      }
    })
    return response
  }
}