import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [shippingAddress, setShippingAddress] = useState('');

  const handleSave = () => {
    //  shipping address logic
    console.log('Shipping address saved:', shippingAddress);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      <input
        type="text"
        placeholder="Shipping Address"
        value={shippingAddress}
        onChange={(e) => setShippingAddress(e.target.value)}
      />
      <button onClick={handleSave}>Save Shipping Address</button>
    </div>
  );
};

export default Profile;
