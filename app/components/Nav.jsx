const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
       <div className="top-bar-left">
         <ul className="menu">
           <li className="menu-text">
             React Timer App
           </li>
           <li>
             <IndexLink to='/' activeClassName="active">Timer</IndexLink>
           </li>
           <li>
             <IndexLink to='/' activeClassName="active">Countdown</IndexLink>
           </li>
         </ul>
       </div>
       <div className="top-bar-right">
         <ul className="menu">
           <li className="menu-text">
             <span>Created By</span>
             <a href="http://github.com/AundreyD" target="_blank">Aundrey Drummond</a>
           </li>
         </ul>
       </div>
      </div>
    )
  }
});

module.exports = Nav;
