import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/HeaderComponent/header';
import QuizForm from './Components/QuizComponent/QuizForm';
import OurService from './Components/OurServiceComponent/OurService';
import AboutUs from './Components/AboutUsComponent/AboutUs';
import Contact from './Components/ContactComponent/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <App /> */}
    <Header />
    <QuizForm />
    <OurService />
    <AboutUs />
    <Contact />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
