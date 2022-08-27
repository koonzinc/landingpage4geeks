import React from 'react'

const Card = () => {
  return (
    <div class="card" style={{width: '100%'}}>
        <img class="card-img-top" src="https://placeimg.com/500/325/any" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title font-weight-bold">Card title</h5>
            <p class="card-text" style={{paddingBottom: '1rem'}}>Some quick example text to build on the card title and make up the bulk of the card's content. This is an extra sentence.</p>
        </div>
        <ul class="list-group list-group-flush">
            
            
            <li class="list-group-item"><a href="#" class="btn btn-primary font-weight-bold">Find Out More!</a></li>
        </ul>
        
    </div>
  )
}

export default Card