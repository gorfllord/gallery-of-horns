import './HornedBeast.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: 0
    }
  }

  handleFaves = () => {
    this.setState({
      faves: this.state.faves + 1
    });
  }

  render() {
    return (
      <article>
        <Card className="card">
          <Card.Title className="title">{this.props.title}</Card.Title>
          <Card.Img className="cardImage" src={this.props.imageUrl} alt={this.props.description} title={this.props.title}/>
          <Card.Text>{this.props.description}</Card.Text>
          <div className="favs">
            <Card.Text>💖 {this.state.faves} faves</Card.Text>
            <Button onClick={this.handleFaves} className="button">Favorite</Button>
          </div>
        </Card>
      </article>
    )
  }
}
export default HornedBeast;
