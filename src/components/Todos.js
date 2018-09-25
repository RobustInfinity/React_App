import React, {Component} from 'react'
import Pagination from './Pagination'

class Todos extends Component{

    constructor(props){
        super(props)
        this.state = {
            todos : [],
            dataToBeShown : [],
            currentPage : 1
        }
        this.setPages = this.setPages.bind(this)
    }

    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/todos"
        fetch(url)
        .then((repsonse)=>{
            return repsonse.json()
        })
        .then((json)=>{
            this.setState({todos : json}, function(){
                var {todos, currentPage} = this.state;
                var data = []
                for(var i = (currentPage-1)*10; i < currentPage *10; i++){
                    data.push(todos[i])
                }
                this.setState({dataToBeShown : data})
            })
        })
    }
    setPages(page = 1){
        var {todos} = this.state;
        if(page){
            this.setState({currentPage : page},function(){
                var {currentPage} = this.state;
                var data = []
                for(var i = (currentPage-1)*10; i < currentPage *10; i++){
                    data.push(todos[i])
                }
                this.setState({dataToBeShown : data})
            })
        }
    }

    render(){
        const {dataToBeShown} = this.state;
        const {todos} = this.state
        const count = todos.length;
        return(
            <div>
            <h1>Todos</h1>
            {dataToBeShown.map((value, index)=>{
                return <div key={index}>Title : {value.title}</div>
            })}
            <Pagination count={count} setPages={this.setPages}></Pagination>
            </div>
        )
    }
}

export default Todos;