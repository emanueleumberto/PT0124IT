import './App.css';
import Card from './components/Card';

let data = [
  {title:"Welcome", description:"Welcome to Card"}, 
  /* {title:"Lorem Ipsum", description:"Welcome to Card"},
  {title:"Ciao a tutti", description:"Welcome to Card"} */
];

function App() {
  return (
    <>
      {data.map(ele => <Card title={ele.title} description={ele.description}/>)}
    </>
  );
}

export default App;
