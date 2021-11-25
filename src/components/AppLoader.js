import React from 'react';
import { BiNetworkChart } from 'react-icons/bi';

const AppLoader = (props) => {
  const { size = 65 } = props;
  return (
    <div className="app-loader-container">
      <div className="app-loader">
        <BiNetworkChart size={size} />
      </div>
    </div>
  );
};

export default AppLoader;
