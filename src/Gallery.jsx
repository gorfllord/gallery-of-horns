import './Gallery.css';
import React from 'react';
import HornedBeast from './HornedBeast';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let beastArr = this.props.data.map((beast) => {
      return <HornedBeast key={beast._id} title={beast.title} imageUrl={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns} handleShowModal={this.props.handleShowModal}/>
    });
    return (
      <>
        {beastArr}
      </>
    );
  }
}
export default Gallery;
