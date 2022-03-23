import React from 'react'
import MainCard from '../MainCard';
import SmallerCards from '../SmallerCards';

const Trending = () => {
  return (
    <div>
        <br />
        <MainCard title="TRENDING" subtitle="find the trending news here" />
        <br />
        <SmallerCards />
        <br />
        <SmallerCards />
    </div>

  );
};

export default Trending;

