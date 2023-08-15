import React from 'react';
class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
        <p>{this.props.description}</p>
      </article>
    )
  }
}
class Gallery extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast title="UniWhal" imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="A unicorn and a narwhal nuzzling their horns" />
      </main>
    )
  }
}
export default Gallery;
