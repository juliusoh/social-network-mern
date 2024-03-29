import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';
import api from '../axiosConfig';

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await api.get('/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add like
export const addLike = id => async dispatch => {
  try {
    const res = await api.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Remove Likes

export const removeLike = id => async dispatch => {
  try {
    const res = await api.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};


// Delete Post


export const deletePost = id => async dispatch => {
  try {
    const res = await api.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: { id }
    });
    dispatch(setAlert('Post Removed', 'success'))
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add post
export const addPost = formData => async dispatch => {
  try {
    const res = await api.post('/api/posts', formData);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Get posts
export const getPost = id => async dispatch => {
  try {
    const res = await api.get(`/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add Comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await api.post(`/api/posts/comment/${postId}`, formData, config);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Comment

export const deleteComment = (postId, commentId) => async dispatch => {

  try {
    await api.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};