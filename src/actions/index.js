import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';


const API_KEY = '?key=apqowierupaodfi';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPostsAction() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

// lo usamos para gestionar el form de creacion del blog
export function createPostAction(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPostAction(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}