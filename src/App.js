import {useState} from 'react';
import Data from './components/Data';
import Quesions from './components/Questions';
import './sass/all.scss';

function App() {

  const [quesions] = useState(Data);
  console.log(quesions);

  return (
    <div className="App">
      <main>
        <h3>Questions And Answers About Login</h3>
        <section className='Accordion'>{
          quesions.map(quesion => {
            return <Quesions key={quesion.id} {...quesion} />
          })
        }</section>
      </main>
    </div>
  );
}

export default App;
