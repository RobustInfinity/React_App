import React, {Component} from 'react'
import {Consumer} from '../Context'
import InputGroup from '../components/InputGroup'
import uuidv1 from 'uuid/v1'


class AddContact extends Component{
    state = {
        name : '',
        email : '',
        phone : '',
        website : '',
        errors : {
            name : '',
            email : '',
            phone : '',
            website : ''
        }
    }
    addContact = (dispatch, e)=>{
        e.preventDefault()
        const {name, email, phone, website,errors} = this.state
        console.log(name + ' ' + email +' ' +phone + ' ' +website)
        if(this.validate(name, email, phone,website)){
            const newContact = {
                id : uuidv1(),
                name,
                email,
                phone : parseInt(phone, 10),
                website,
                errors
            }
            console.log(newContact)
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({newContact}),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => {return response.json()})
            .then(json => {
                console.log(json)
                dispatch({type : 'ADD', payload : newContact})})
            
            this.setState(
                {
                    name : '',
                    email : '',
                    phone : '',
                    website : '',
                    errors : {
                        name : '',
                        email : '',
                        phone : '',
                        website : ''
                    }
                })
                this.props.history.push('/contact')
        }
    }

    validate = (name, email, phone, website)=>{
        var flag = true;
        var err = {
            name : '',
            email : '',
            phone : '',
            website : ''
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
        if(website === ''){
            err.phone = 'Website feild cannot be empty'
            flag = false;
        }
        this.setState({errors : {name : err.name, email : err.email, phone : err.phone, website : err.website}})
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
        const {name, email, phone, website,errors} = this.state;
        // console.log(errors)
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
                   <InputGroup name='website' value={website} type='text' placeholder='Enter Website' onChange={this.onChange} error={errors.website}></InputGroup>
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