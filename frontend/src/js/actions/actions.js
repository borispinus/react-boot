export function createPost(title, text, date) {
  return {
    type: 'CREATE_POST',
    post: {
      title,
      text,
      date
    }
  }
}

export function deletePost(id) {
  return {
    type: 'DELETE_POST',
    id
  }
}

export function fetchPosts(posts) {
  return {
    type: 'FETCH_POSTS',
    posts: posts
  }
}