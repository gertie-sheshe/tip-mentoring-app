import * as types from './actionTypes';

function fetchBooksSuccess(data) {
  return {
    type: types.FETCH_BOOKS_SUCCESS,
    result: data
  }
}


export function deleteBook(id) {
  return (dispatch, getState) => {
    fetch(`http://localhost:5000/api/book/${id}`, {method: 'DELETE'})
    .then((response) => response.json)
    .then((data) => {
      dispatch(fetchBooks());
    })
  }
}

export function createBook(data) {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  return (dispatch, getState) => {
    fetch(`http://localhost:5000/api/book`, {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchBooks());
    })
    .catch((err) => console.log(err))
  }
}

export function fetchBooks() {
  return (dispatch, getState) => {
    fetch('http://localhost:5000/api/books')
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchBooksSuccess(data))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}