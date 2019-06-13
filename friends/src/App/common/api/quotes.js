import axios from 'axios';

export default axios.create({
  baseURL: 'https://brianiswu-cat-facts-v1.p.rapidapi.com/facts',
})