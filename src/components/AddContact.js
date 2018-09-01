import React, {Component} from 'react'
import {Consumer} from '../Context'
import InputGroup from '../components/InputGroup'


class AddContact extends Component{
    num = 4;
    state = {
        name : '',
        email : '',
        phone : '',
        errors : {
            name : '',
            email : '',
            phone : ''
        }
    }
    addContact = (dispatch, e)=>{
        e.preventDefault()
        const {name, email, phone, errors} = this.state
        console.log(name + ' ' + email +' ' +phone)
        if(this.validate(name, email, phone)){
            const newContact = {
                id : ++this.num,
                name,
                email,
                phoneNumber : parseInt(phone, 10),
                errors
            }
            console.log(newContact)
            dispatch({type : 'ADD', payload : newContact});
            this.setState(
                {
                    name : '',
                    email : '',
                    phone : '',
                    errors : {
                        name : '',
                        email : '',
                        phone : ''
                    }
                })
                this.props.history.push('/contact')
        }
    }

    validate = (name, email, phone)=>{
        var flag = true;
        var err = {
            name : '',
            email : '',
            phone : ''
        }
        if(name === ''){
            err.name = 'Name feild cannot be empty'
            flag = false;
        }
        if(email === ''){
            err.email = 'Email feild cannot be empty'
            flag = false;
        }
        if(phone === ''){
            err.phone = 'Phone feild cannot be empty'
            flag = false;
        }
        this.setState({errors : {name : err.name, email : err.email, phone : err.phone}})
        if(flag){
        console.log('Validation Successful')
        }
        else{
            console.log('Validation Failed')
        }
        return flag;
    }

    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value});
    }
    render(){
        const {name, email, phone, errors} = this.state;
        console.log(errors)
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
                <div className='container needs-validation'>
                   <InputGroup name='name' value={name} type='text' placeholder='Enter Name' onChange={this.onChange} error={errors.name}></InputGroup>
                   <InputGroup name='email' value={email} type='email' placeholder='Enter Email' onChange={this.onChange} error={errors.email}></InputGroup>
                   <InputGroup name='phone' value={phone} type='text' placeholder='Enter Phone ' onChange={this.onChange} error={errors.phone}></InputGroup>
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