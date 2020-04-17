import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

class BaseLayout extends React.Component {
  render(){
    return (
      <div className="Home">
        <Header/>
        <Navbar/>
        <div className="content">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default BaseLayout;