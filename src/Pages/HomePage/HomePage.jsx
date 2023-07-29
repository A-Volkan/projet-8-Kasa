import React from 'react';
import Banner from '../../Components/Banner';
import AppartmentGrid from '../../Components/AppartmentGrid';
import Main from '../../Components/Main';
import "./HomePage.scss";

function HomePage() {
  return (
    <div>

      <Main>
        <Banner />
        <AppartmentGrid />
      </Main>

    </div>
  )
}

export default HomePage;