import React, {Component} from 'react'
import Contact from './Contact'
import {Consumer} from '../Context'

class Contacts extends Component{
    

    // deleteContact = (id)=>{
    //     const {contacts} = this.state;
    //     const newContacts = contacts.filter((contact)=>{
    //         if(contact.id !== id){
    //             return contact;
    //         }
    //     })
    //     console.log(id);
    //     console.log(newContacts)
    //     this.setState({contacts : newContacts})
    // }
    render(){

        return(
            <Consumer>
            {value => <React.Fragment>
                     {value.contacts.map((contact)=>{
                        //  return <Contact deleteClickHandler={this.deleteContact.bind(this, contact.id)} key={contact.id} contact={contact} />
                        return <Contact key={contact.id} contact={contact} />
                    })}
                     </React.Fragment>}
            </Consumer>
        )


        // const {contacts} = this.state;
        // return(
        //     <React.Fragment>
        //     {contacts.map((contact)=>{
        //         return <Contact deleteClickHandler={this.deleteContact.bind(this, contact.id)} key={contact.id} contact={contact} />
        //     })}
        //     </React.Fragment>
        // )
    }
}

export default Contacts;