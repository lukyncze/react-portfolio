import Logo from '../assets/logo.svg';
import Container from '../common/Container';

const Header = (): JSX.Element => {
  return (
    <header className='py-8'>
      <Container>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='Logo' />
          </a>

          <button className='btn btn-sm'>Work with me</button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
