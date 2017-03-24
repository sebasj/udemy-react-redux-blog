import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';

const API_KEY = '?key=apqowierupaodfi';
const ROOT_URL = 'http://reduxblo.herokuapp.com/api';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}