import React,{Component} from 'react'


const Context = React.createContext();

const reducer = function(state, action){
    
    switch(action.type){
        case 'DELETE' :
        console.log(action.type +' ' + action.payload)
        return{
            // ...state,
            contacts : state.contacts.filter((contact)=>{
                // console.log(contact)
                if(contact.id !== action.payload){
                    console.log(contact)
                    return contact;
                }
            })
        }
        // break;
        case 'ADD' :
        console.log(action.payload)
        // console.log(...state.contacts)
        console.log( [...state.contacts, action.payload])
        return{
            // ...state,
            contacts : [action.payload, ...state.contacts] 
        }
        case 'UPDATE' :
        console.log(action.payload)
        // console.log(...state.contacts)
        
        return{ 
            contacts : state.contacts.filter((contact)=>{
                // console.log(contact)
                if(contact.id === action.payload.id){
                    console.log(contact)
                    console.log(action.payload)
                    contact = action.payload;}
                    console.log(contact)
                    return contact;
                
            })
        }
        // break;
        default :
        return state;
    }
}
export class Provider extends Component{

    state={
        contacts : [],
        dispatch : (action)=>{this.setState((state) => (reducer(state, action)))}
    }

    componentDidMount(){
        console.log('componentDidMount...')
        const url = 'https://jsonplaceholder.typicode.com/users/2'
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{ return response.json()})
        .then((json)=>{
            this.setState({contacts : json})
            console.log(json)
        })
        .catch((err)=>{console.log(err)})
    }

    render(){
        return(
            <Context.Provider value={this.state} >
             {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer  = Context.Consumer;