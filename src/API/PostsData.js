import axios from "axios";

export default class PostData {
  static async getPosts() {
    // делаем запрос по адресу, записывапем значение
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  }
}