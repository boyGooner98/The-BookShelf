import React from 'react';
import '../../styleAll.css';
import { Link, BrowserRouter } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Options = () => {        
    const Options = [
      {
        type: 'options',
        text: 'Register',
        link: '/register'
      },
      {
        type: 'options',
        text: 'Login',
        link: '/login'
      },
      {
        type: 'options',
        text: 'Reviews',
        link: '/Reviews'
        },
        {
        type: 'options',
        text: 'Add a Review',
        link: '/addReview'
        },
          {
        type: 'options',
        text: 'Profiles',
        link: '/profiles'
      }
    ];
    const showItems = () => {
        return Options.map((item, i) => {
            return (
              <div key={i} className="options">
                  <Link to={item.link} className = "optLink">
                            <FontAwesomeIcon style={{
                               marginRight:'10px'
                    }} icon={faBars} />
                    {item.text}
                  </Link>
              </div>
            );
        })
    }
    return (
        <div className = "navOptions">
            {showItems()}
        </div>
    )
}
export default Options