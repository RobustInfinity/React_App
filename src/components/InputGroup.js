import React from 'react'
import PropTypes from 'prop-types'

const InputGroup = (props)=>{
    const {name, type, value, placeholder, onChange, error} = props;
    console.log(props);
    if(name=== 'phone'){
        parseInt(value, 10);
    }
    return (
        <div className="form-group">
            <input name={name} 
            value={value} 
            onChange={onChange} 
            type={type} 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder={placeholder} required/>
            {error !== "" ? (<div className='invalid-feedback' style={{display: 'block'}}>{error}</div>) : null}
            </div>
                    
    )
}

InputGroup.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    error : PropTypes.string
}
export default InputGroup;