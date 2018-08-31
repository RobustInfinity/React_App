import React, {Component} from 'react'
import {Consumer} from '../Context'


class AddContact extends Component{
    num = 4;
    state = {
        name : '',
        email : '',
        phone : ''
    }
    addContact = (dispatch, e)=>{
        e.preventDefault()
        const {name, email, phone} = this.state
        const newContact = {
            id : ++this.num,
            name,
            email,
            phoneNumber : parseInt(phone)
        }
        console.log(newContact)
        dispatch({type : 'ADD', payload : newContact});
        this.setState(
        this.state = {
            name : '',
            email : '',
            phone : ''
        })
        
    }
    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value});
    }
    render(){
        const {name, email, phone} = this.state;
        return(
            <Consumer>
            {value =>{
                const { dispatch } = value;
                return(
                <div className='col-md-7 container'>
                <div className='card'>
                <div className = 'card-header'>
                Add Contact
                </div>
                <div className='card-body'>
                <div className='container'>
                    <div className="form-group">
                        <input name='name' value={name} onChange={this.onChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <input name='email' value={email} onChange={this.onChange} type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                    <input name='phone' value={phone} onChange={this.onChange} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Phone Number" />
                    </div>
                    <button className="btn btn-block btn-primary" onClick={this.addContact.bind(this, dispatch)}>Add</button>
                </div>
                </div>
                </div>
                </div>
                )
            }}
            </Consumer>
        )
    }
}

export default AddContact;