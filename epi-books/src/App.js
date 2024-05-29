import { Button, Container } from 'react-bootstrap';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import { useState } from 'react';
import UserComponent from './components/UserComponent';

function App() {

  /* let type = 'fantasy';
  let setType = (val) => {
    type = val;
  } */
/* 
  let pippo = useState('fantasy');
  console.log(pippo);

  let type = pippo[0];
  let setType = pippo[1]; */

  let [type, setType] = useState('fantasy');

  return (
    <>
      <MyNav /> 
      <Container className="my-3">
        <Welcome />
        <Button variant="dark" className='m-1' onClick={() => setType('history')}>History</Button>
        <Button variant="dark" className='m-1' onClick={() => setType('fantasy')}>Fantasy</Button>
        <Button variant="dark" className='m-1' onClick={() => setType('horror')}>Horror</Button>
        {type === 'fantasy' && <AllTheBooks books={fantasy} />}
        {type === 'history' && <AllTheBooks books={history} /> }
        {type === 'horror' && <AllTheBooks books={horror} /> }

        <UserComponent />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
