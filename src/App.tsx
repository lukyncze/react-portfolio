import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

const App = (): JSX.Element => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
