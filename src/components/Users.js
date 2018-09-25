import React, {Component} from 'react'

import Pagination from './Pagination'

class Users extends Component{
    constructor(props){
        super(props)
        this.state = {
            users : [],
            dataToBeShown : [],
            currentPage : 1
        }
        this.setPages = this.setPages.bind(this)
    }
    componentDidMount(){
        var url = "https://jsonplaceholder.typicode.com/users"
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            // console.log(json)
            this.setState({users : json}, function(){
                var {users, currentPage} = this.state;
                var data = []
                for(var i = (currentPage-1)*10; i < currentPage *10; i++){
                    data.push(users[i])
                }
                this.setState({dataToBeShown : data})
            })
        })
    }

    setPages(page){
        var {users} = this.state;
        if(page){
            this.setState({currentPage : page}, function(){
                var {currentPage} = this.state;
                var data = []
                for(var i = (currentPage-1)*10; i < currentPage *10; i++){
                    data.push(users[i])
                }
                this.setState({dataToBeShown : data})
            })
        } 
    }
    render(){
        const {dataToBeShown} = this.state;
        const {users} = this.state
        const count = users.length;
        return(
            <div>
            <h1>Users</h1>
            {dataToBeShown.map((value, index)=>{
                return <div key={index}>{value.name}</div>
            })}
            <Pagination count={count} setPages={this.setPages} ></Pagination>
            </div>
        )
    }
}

export default Users;