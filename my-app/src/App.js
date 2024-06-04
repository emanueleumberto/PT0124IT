import './App.css';
import Card from './components/Card';
import MyComponentClass from './components/MyComponentClass';
import MyComponentFunc from './components/MyComponentFunc';

let data = [
  {title:"Welcome", description:"Welcome to Card"}, 
  /* {title:"Lorem Ipsum", description:"Welcome to Card"},
  {title:"Ciao a tutti", description:"Welcome to Card"} */
];

function App() {
  return (
    <>
      {/* {data.map(ele => <Card title={ele.title} description={ele.description}/>)} */}
      <MyComponentClass />
      <MyComponentFunc />
    </>
  );
}

export default App;
