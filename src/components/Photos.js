import React, {Component} from 'react'

import Pagination from './Pagination'

class Photos extends Component{
    constructor(props){
        super(props)
        this.state = {
            photos : [],
            dataToBeShown : [],
            currentPage :1
        }
    this.setPages = this.setPages.bind(this)
    }
    componentDidMount(){
        var url = "https://jsonplaceholder.typicode.com/photos?albumId=1"
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            this.setState({photos : json}, function(){
                var {photos, currentPage} = this.state;
                var data = []
                for(var i = (currentPage-1)*10; i < currentPage *20; i++){
                    data.push(photos[i])
                }
                this.setState({dataToBeShown : data})
            })
        })
    }

    setPages(page){
        var {photos} = this.state;
        if(page){
            this.setState({currentPage : page}, function(){
                var {currentPage} = this.state;
                var data = []
                for(var i = (currentPage-1)*10; i < currentPage *10; i++){
                    data.push(photos[i])
                }
                this.setState({dataToBeShown : data})
            })
        }
    }

    render(){
        const {dataToBeShown} = this.state;
        const {photos} = this.state
        const count = photos.length;
        return(
            <div className='container'>
            <div className='row justify-content-center'>
            <div className='col-md-12'>
            <h1>Photos</h1>
            </div>
            {dataToBeShown.map((value, index)=>{
                return <div className="container-fluid card col-md-5" style={{margin : '10px'}} key={index} >
                <img className="class-img-top" src={value.url} style={{height: "230px"}}></img>
                
                <div className="card-body">
                    <p className="card-text">{value.title}</p>
                </div>
                </div>
            })}
            <Pagination count={count} setPages={this.setPages}></Pagination>
            </div>
            </div>
        )
    }
}

export default Photos;