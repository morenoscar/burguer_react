import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fullstack-project-579ee.firebaseio.com/'
})

export default instance;