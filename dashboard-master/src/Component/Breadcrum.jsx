import React from 'react';
import { useLocation, Link } from 'react-router-dom';
// import './Breadcrum.css';

const Breadcrum = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const currentPage = paths.length > 0 ? capitalize(paths[paths.length - 1]) : 'Home';

  return (
    <div className="breadcrumb-container mb-4">
      {/* Page Title */}
      <h4 className="page-title fw-semibold mb-2">{currentPage}</h4>

      {/* Breadcrumb Trail */}
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb-list">
          <li>
            <Link to="/">Home</Link>
            {paths.length > 0 && <span className="chevron">{'>'}</span>}
          </li>
          {paths.map((segment, i) => {
            const path = `/${paths.slice(0, i + 1).join('/')}`;
            const isLast = i === paths.length - 1;

            return (
              <li key={i}>
                {isLast ? (
                  <span className="active">{capitalize(segment)}</span>
                ) : (
                  <>
                    <Link to={path}>{capitalize(segment)}</Link>
                    <span className="chevron">{'>'}</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav> */}
    </div>
  );
};

export default Breadcrum;
