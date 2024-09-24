import './App.css';
import Header from './components/Header';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <NewPost />
      </div>
    </div>
  );
}

export default App;
