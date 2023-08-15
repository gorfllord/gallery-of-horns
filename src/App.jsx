import { useState } from 'react';
import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default App
