import axios from 'axios';

const API_KEY = 'AIzaSyDP_ZtX7ctq2NUfKby6RPhV0oITbI519fM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
    }
});