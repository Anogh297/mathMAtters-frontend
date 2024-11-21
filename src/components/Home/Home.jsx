import React from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { Header } from './Header';
import Home2 from './home2';
import Testimonial from './Testimonial';
import { Faq } from './Faq';
// import { Home2 } from './Home2';


const Home = () => {
    return (
        <div>
            
            {/* <Latex>We know $12^1$ + $23^1$ = {12+23}.</Latex> */}
            {/* <Home2></Home2> */}
            
            <Header></Header>
            <Home2></Home2>
            <Faq></Faq>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
