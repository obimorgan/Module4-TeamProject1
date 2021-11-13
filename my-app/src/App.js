
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/NavBar/Navbar'
import Heading1 from './Components/Heading1'
import Heading2 from './Components/Heading2'
import Heading3 from './Components/Heading3'
import {Container} from 'react-bootstrap'
import Horror from './Components/Cards/Horror'
import HarryPotterCards from './Components/Cards/HarryPotterCards'
import LordOfCards from './Components/Cards/LordOfCards'
import SearchBar from './Components/SearchBar/SearchBar'




function App() {
  return (
    <Container fluid>
      <Navbar/>
      <div>
      <SearchBar/>
      </div>
      <div>
      <Heading1/>
      <Horror/>
      <Heading2/>
      <HarryPotterCards/>
      <Heading3/>
      <LordOfCards/>
      </div>
    </Container>
    
  );
}

export default App;
