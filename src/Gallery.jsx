import './Gallery.css';
import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Gallery extends React.Component {
  render() {
    let beastArr = [];
    data.forEach((beast, i) => {
      beastArr.push(<HornedBeast key={beast._id} title={beast.title} imageUrl={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns} />)
    });
    return (
      <main>
        {beastArr}
      </main>
    );
  }
}
export default Gallery;
