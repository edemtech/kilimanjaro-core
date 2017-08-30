import axios from 'axios';
import { apiPrefix, serverPort } from '../etc/config.json';
import { LOAD_TABLE, CHOOSE_USER, DELETE_USER, UPDATE_USER } from './types';
const ip = apiPrefix + serverPort;

export function setUsersTable(table) {
  return {
    type: LOAD_TABLE,
    payload: table
  };
}
export function loadTable() {
  return dispatch => {
    return axios.get(ip+'/api/users').then(res => {
      const data = res.data;
      dispatch(setUsersTable(data));
    });
  }
}

export function setEditingUser(user) {
  return {
    type: CHOOSE_USER,
    user
  };
}
export function getUser(userId) {
  return dispatch => {
    return axios.get(ip+'/api/users/'+userId).then(res => {
      const data = res.data.user;
      dispatch(setEditingUser(data));
    });
  }
}

export function deleteUser() {
  return {
    type: DELETE_USER
  };
}
export function removeUser(userId) {
  return dispatch => {
    return axios.delete(ip+'/api/users/'+userId).then(res => {
      const data = res.data;
      dispatch(deleteUser());
    });
  }
}

export function updateUser() {
  return {
    type: UPDATE_USER
  };
}
export function saveUser(userId, data) {
  return dispatch => {
    return axios.put(ip+'/api/users/'+userId, {
      ...data
    }).then(res => {
      const data = res.data;
      dispatch(updateUser());
    });
  }
}
