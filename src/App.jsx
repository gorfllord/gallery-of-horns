import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      selectedBeast: '',
      selectedBeastAlt: '',
      selectedBeastName: ''
    };
  }

  handleShowModal = (imageURL, altText, title) => {
    this.setState({
      isModalDisplaying: true,
      selectedBeast: imageURL,
      selectedBeastAlt: altText,
      selectedBeastName: title
      })
  };

  handleCloseModal = () => {
    this.setState({isModalDisplaying: false});
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <Gallery handleShowModal={this.handleShowModal} data={data}/>
          <Modal className="imagePop" size='lg' show={this.state.isModalDisplaying} onHide={this.handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.selectedBeastName}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={this.state.selectedBeast} alt={this.state.selectedBeastAlt}/></Modal.Body>
          </Modal>
        </main>
        <Footer />
      </>
    )
  }
}


export default App
