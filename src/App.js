import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Posts from './pages/posts';
import CreatePost from './pages/create-post';
import PostDetail from './pages/PostDetail'
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Posts />} />
        <Route path='/create-post' exact element={<CreatePost />} />
        <Route path='/posts/:id' exact element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
