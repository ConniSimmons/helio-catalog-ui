import React, { Component } from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Page extends Component {
   
    render() {
        return(
        <section className="page-wrapper">
            <div>
            <NavBar />
               
            
            <main className="content">
                {this.props.children}
            </main>
            
            <Footer />
            </div>
        </section>
        )
    }
}