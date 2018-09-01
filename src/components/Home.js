import React from 'react'

const Home = (props)=>{
    const {title} = props;
    return(
        <div className="jumbotron jumbotron-fluid" style={{margin : '100px 0px'}}>
  <div className="container">
    <h1 className="display-4">{title}</h1>
    <p className="lead">Simple way to manage Contacts.</p>
  </div>
</div>
    )
}

export default Home;