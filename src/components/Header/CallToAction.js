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
        <div className="calltoactioncall floatleftcall paddingcall roundcornercall lightroundcall ">
          <a  className="whitefontcall paddingcall" href="http://walcottcodingclub.com/signup/index.html">
            Free Trial
          </a>
        </div>
          <div className="calltoactioncall darkbackroundcall floatleftcall paddingcall roundcornercall margincall  ">
        <a  className="whitefontcall"  href="http://walcottcodingclub.com/signup/index.html">Enrol</a>
      </div>
       </div>
    );
  }
}

export default CallToAction;
