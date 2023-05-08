import React, { Component } from "react";
import "./Header.css";
import "./HeaderMobile.css";

class CallToAction extends Component {
  render() {
    return (
      <div className="navbar-text">
        <div className="calltoactioncall floatleftcall paddingcall">
        <i class="fa fa-search darkfontcall" aria-hidden="true"></i> 
        </div>
        <div className="calltoactioncall floatleftcall paddingcall roundcornercall lightroundcall mobilecallhide">
          <a  className="darkfontcall paddingcall" href="http://walcottcodingclub.com/signup/index.html">
            Free Trial & Brochure
          </a>
        </div>
          <div className="calltoactioncall darkbackroundcall floatleftcall paddingcall roundcornercall margincall mobilecallhide ">
        <a  className="whitefontcall"  href="http://walcottcodingclub.com/signup/index.html">Enrol</a>
      </div>
       </div>
    );
  }
}

export default CallToAction;
