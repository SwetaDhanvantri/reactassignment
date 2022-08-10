import React from 'react';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <section id="home" className='home'>
    <div>
        <h1 className='heading'>Welcome to best online courses</h1>
        <img src='/img/7915189_3784896.jpg' class="img-fluid" alt="Responsive image"/>
        <img src='/img/course2.png' class="img-fluid" alt="Responsive image"/>
        <img src='/img/course3.png' class="img-fluid" alt="Responsive image"/>
    </div>
    </section>
  )
} 

export default Home