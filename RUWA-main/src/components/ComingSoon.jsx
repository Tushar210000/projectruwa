import React from 'react';
// import './ComingSoon.css'; // optional: for custom styles

const ComingSoon = () => {
  return (
    <div className="coming-soon d-flex align-items-center justify-content-center text-center vh-100 bg-light text-white">
      <div>
        <h1 className="display-4  fw-bold">🚧 Coming Soon</h1>
        <p className="lead mb-4 text-dark" >We’re working hard to launch this page. Stay tuned!</p>

        <form className="d-flex justify-content-center gap-2 flex-wrap">
          <input
            type="email"
            className="form-control w-auto"
            placeholder="Enter your email"
            style={{ minWidth: '250px' }}
          />
          <button className="btn btn-warning">Notify Me</button>
        </form>

        <p className="mt-4 text-muted">Thank you for your patience 🙏</p>
      </div>
    </div>
  );
};

export default ComingSoon;
