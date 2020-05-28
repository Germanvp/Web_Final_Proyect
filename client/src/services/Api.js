import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://web-project-server.herokuapp.com/`
  })
}
