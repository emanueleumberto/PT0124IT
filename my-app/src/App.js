import { Container } from 'react-bootstrap';
import './App.css';
import Card from './components/Card';
import MyComponentClass from './components/MyComponentClass';
import MyComponentFunc from './components/MyComponentFunc';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import UsersPage from './pages/UsersPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';

let data = [
  {title:"Welcome", description:"Welcome to Card"}, 
  /* {title:"Lorem Ipsum", description:"Welcome to Card"},
  {title:"Ciao a tutti", description:"Welcome to Card"} */
];

function App() {
  return (
    <>
      {/* {data.map(ele => <Card title={ele.title} description={ele.description}/>)} */}
      {/* <MyComponentClass />
      <MyComponentFunc /> */}

      {/* <HomePage />
      <UsersPage />
      <UserDetailPage />
      <ErrorPage /> */}
      
      <BrowserRouter basename="/">
        <NavbarComponent />
        <Container>
          <Routes>
            <Route index element={<HomePage />} /> 
            <Route path='/users' element={<UsersPage />} /> 
            <Route path='/users/:id/:name' element={<UserDetailPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Container>
        
      </BrowserRouter>
    </>
  );
}

export default App;
