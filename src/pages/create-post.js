import React from 'react'
import CreatePost from '../components/CreatePost';
function post() {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
    }}>
      <h3 style={{
        padding: '10px',
        backgroundColor: '#ccc',
        textAlign: 'center'
      }}>Create Post</h3>
      <CreatePost />
    </div>
  )
}

export default post