import './styles/App.css';
import { Component } from 'react';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
