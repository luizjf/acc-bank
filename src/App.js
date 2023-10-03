import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import NavBar from './components/navBar';
import FormPage from './constants/formPage';
import SectionBank from './components/SectionBank';
import InformationBank from './components/informationBank';
import ArticleBank from './components/articleBank';
import FooterBar from './components/footerBar';
import RequestBank from './constants/subcontants/requestBank';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <SectionBank/>
        <InformationBank/>
        <ArticleBank/>
        <FooterBar/>
        <Routes>
          <Route path='/thanks-for-request' element={<RequestBank />}/>
          <Route path='/form' element={<FormPage />}/>
        </Routes>
      </div>
    </Router>
  );
};

