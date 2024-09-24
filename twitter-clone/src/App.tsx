import './App.css';
import Header from './components/Header';
import NewPost from './components/NewPost';
import Post from './components/Post';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <NewPost />
        <br />
        <Post userName='fTest lTest' postText='testestest' />
      </div>
    </div>
  );
}

export default App;
