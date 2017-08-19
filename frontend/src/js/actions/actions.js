export function deletePost(id) {
  return {
    type: 'DELETE_POST',
    id
  }
}

export function fetchPosts(posts) {
  return {
    type: 'FETCH_POSTS',
    posts
  }
}

export function login() {
  return {
    type: 'LOGIN',
  }
}