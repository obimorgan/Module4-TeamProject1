
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Components/Cards/Cards'
import Heading1 from './Components/Heading1'
import Heading2 from './Components/Heading2'
import Heading3 from './Components/Heading3'
import {Container} from 'react-bootstrap'


function App() {
  return (
    <Container>
      <Heading1/>
      <Cards/>
      <Heading2/>
      <Cards/>
      <Heading3/>
      <Cards/>

    </Container>
  );
}

export default App;
