import './App.css';
import Header from './components/Header';
import NewPost from './components/NewPost';
import Feed from './components/Feed';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <NewPost />
        <Feed />
      </div>
    </div>
  );
}

export default App;
