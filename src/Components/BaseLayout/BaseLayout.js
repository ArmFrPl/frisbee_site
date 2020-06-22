import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";

class BaseLayout extends React.Component {
  render(){
    return (
      <div className="Home">
        <Header/>
        <Navbar/>
        <div className="content">
          {
            this.props.children
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default BaseLayout;