import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav>
               <header className="header-nav">
               <Link to="/" style={{textDecoration:"none"}}>   <h2 style={{color:"black"}}>Zim <span className="resort-span">Resort</span> </h2></Link>
        </header>
      
<section className="mobile-menu">
    <a href="#!" className="a-btn-menu" onClick={
        this.handleToggle
    } style={{color:'#A08e71'}}> <FaAlignRight/> </a>
</section>
<ul className={this.state.isOpen ? "nav-links"  :" show-nav"}>
            <li>
            <Link to="/" className="btn-home">Home</Link>    
                </li>
            <li>
            <Link to="/rooms" className="btn-home">Lodges</Link>    
                </li>
           
        </ul>
            </nav>
        )
    }
}
