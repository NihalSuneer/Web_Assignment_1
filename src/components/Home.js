import React from 'react';


const Home = () => {
  return (
    <div className="container">
      <div className="profile-container">
        <div className="left-profile-container">
          <div style={{ fontSize: '22px' }}>Welcome to</div>
          <div style={{ fontSize: '36px', fontWeight: 'bold' }}>Fitness World</div>
          <div style={{ marginTop: '20px' }}>
            Discover the best fitness gear and accessories to elevate your workouts.
          </div>
        </div>
        <div className="right-profile-container">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace this URL with the new image URL for your fitness theme
              alt="Fitness Gear" width={450}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
