import React, {Component} from 'react'
import './searchbar.css'
class SearchBar extends Component{
    render(){
        return(<div className="searchbar-container-home" 
       >
            <h5 style={{fontWeight:'bold',color:'lightgray'}}>SHIPPING TO AND FROM ANYWHERE IN THE WORLD</h5>
            <h1 style={{fontWeight:'bold',color:'white',fontSize:'300%'}}>Find the <span style={{fontSize:'130%',color:'purple',fontWeight:'bolder'}}>best freight</span>&nbsp;quote</h1>
            <div className="search-bar">
                <div className="search-options"><div className="option">Air</div><div className="option">Sea</div><div className="option">Express</div></div>
                <div className="search-input-bar"><div className="form-row mb-2" >
                                                        <div className="col">
                                                        <input type="text" name="name" className="form-control" placeholder="Select city" />
                                                        </div>
                                                        <div className="col logo-input-container"><span><i className="icofont-industries-2"></i></span>
                                                        <input type="text" name="name" className="form-control" placeholder="City,Port,Country" />
                                                        </div>
                                                        <div className="col logo-input-container"><span><i className="icofont-home"></i></span>
                                                        <input type="text" name="name" className="form-control" placeholder="City,Port,Country" />
                                                        </div>
                                                        <div className="col logo-input-container"><span><i className="icofont-calendar"></i></span>
                                                        <input type="text" name="name" className="form-control" placeholder="Date" />
                                                        </div>
                                                        
                                                    </div></div>
            </div>
        </div>)
    }
}

export default SearchBar;