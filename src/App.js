import './App.css';
import Carousel from './Components/Carousel/Carousel';
import FlashSale from './Components/FlashSale/FlashSale';
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Navbar from './Components/Navbar/Navbar';
import TopBanner from './Components/TopBanner/TopBanner';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <LogoSearchBar></LogoSearchBar>
    <Carousel></Carousel>
    <FlashSale></FlashSale>
    <TopBanner></TopBanner>
    </>
  );
}

export default App;
