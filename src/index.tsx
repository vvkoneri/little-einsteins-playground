import ReactDOM from 'react-dom'
import GameNav from './components/GameNav';
import GuessTheFruit from './components/GuessTheFruit';

const App = () => {
  return (
    <div>
      <GameNav/>
      <GuessTheFruit></GuessTheFruit>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));