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
        break;
        case 'ADD' :
        console.log(action.payload)
        // console.log(...state.contacts)
        console.log( [...state.contacts, action.payload])
        return{
            // ...state,
            contacts : [action.payload, ...state.contacts] 
        }
        break;
        default :
        return state;
    }
}
export class Provider extends Component{

    state={
        contacts : [{
            id : 1,
            name : 'Jhon Doe',
            email : 'jdoe@gmail.com',
            phoneNumber : 123456
        },{
            id : 2,
            name : 'Bob Ross',
            email : 'bross@gmail.com',
            phoneNumber : 123456
        },{
            id : 3,
            name : 'Dawyne Smith',
            email : 'dsmith@gmail.com',
            phoneNumber : 123456
        },{
            id : 4,
            name : 45345,
            email : 'unknown@gmail.com',
            phoneNumber : 123456
        }],
        dispatch : (action)=>{this.setState((state) => (reducer(state, action)))}
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