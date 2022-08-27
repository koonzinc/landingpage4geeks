import React from 'react';
import Card from './Card';

const MainSection = () => {
  return (
<div className='container'>
    <div class="jumbotron my-4 text-left" style={{padding: '4rem 2rem'}}>
            <h1 class="display-4 ">A Warm Welcome!</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, veniam! Recusandae, dolor libero eveniet laudantium hic expedita pariatur provident, natus, quaerat non iusto voluptate magni voluptatem beatae tempora delectus adipisci.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
    </div>
    
    {/* Card Section */}
        <div className='row' >
            <div className='col-md-3' style={{marginBottom: '2rem'}}>
                <Card />
            </div>
            <div className='col-md-3' style={{marginBottom: '2rem'}}>
                <Card />
            </div>
            <div className='col-md-3' style={{marginBottom: '2rem'}}>
                <Card />
            </div>
            <div className='col-md-3' style={{marginBottom: '2rem'}}>
                <Card />
            </div>
        </div>

</div>
  )
}

export default MainSection