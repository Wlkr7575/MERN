import axios from 'axios'

const API =axios.create({baseURL:'http://localhost:3001'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
})

export const fetchPosts =()=> API.get('/post');
export const createPosts = (newPost) => API.post('/post',newPost)
export const updatePost= (id,updatedPost)=>API.patch(`/post/${id}`,updatedPost)
export const deletePost = (id)=>API.delete(`/post/${id}`);
export const likePost = (id)=>API.patch(`/post/${id}/likePost`);

export const signIn = (formData)=>API.post('/user/signin',formData);
export const signUp = (formData)=>API.post('/user/signup',formData);
