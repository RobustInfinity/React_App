import React, {Component} from 'react'

class Pagination extends Component{

    constructor(props){
        super(props)
    }
    
    pageChange(value){
        var page = value;
        this.props.setPages(page);
    }
    
    render(){
        const {count} = this.props;
        var pages =[];
        for(var i = 0; i< count; i= i + 10){
            pages.push(i/10 + 1);
        }
        return( pages.length !== 0 ?
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map((value, index)=>{
                        return <li className="page-item" key={index}>
                            <p onClick={this.pageChange.bind(this, value)} className="page-link" >{value}</p></li>
                    })}
                </ul></nav> : null)
    }
}

export default Pagination;