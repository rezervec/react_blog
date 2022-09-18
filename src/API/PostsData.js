import axios from "axios";

export default class PostData {
  static async getPosts() {
    try {
      // делаем запрос по адресу, записывапем значение
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // возвращаем нужный нам массив с данными о статьях из поля data
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}