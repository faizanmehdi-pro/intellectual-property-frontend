import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrum.scss'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { getSignUpUserDetail } from '../../../../apis/getSignupUserDetail';

const BreadcrumbsEN = () => {
  
  let userID = localStorage.getItem("user_id");

  const [staff, setStaff] = useState();
  useEffect(() => {
    getSignUpUserDetail(userID)
      .then((userData) => {
        setStaff(userData?.is_staff);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [staff]);

  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  return (
    <div className="breadcrumbs" style={{display: staff ? "flex" : "none"}}>
      <Link to="/EN" className='link'>Home</Link>
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          <AiOutlineDoubleRight className='icon'/> 
          {index === pathSegments.length - 1 ? (
            <span className="active">{segment}</span>
          ) : (
            <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>{segment}</Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadcrumbsEN;
