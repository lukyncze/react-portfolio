import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs';
import {Link} from 'react-scroll';

interface NavLink {
  to: string;
  icon: JSX.Element;
  offset?: number;
}

const navLinks: NavLink[] = [
  {to: 'home', icon: <BiHomeAlt />, offset: -200},
  {to: 'about', icon: <BiUser />},
  {to: 'services', icon: <BsClipboardData />},
  {to: 'work', icon: <BsBriefcase />},
  {to: 'contact', icon: <BsChatSquareText />},
];

const renderLinks = (links: NavLink[]): JSX.Element[] => {
  return links.map(({to, offset, icon}, key) => (
    <Link
      className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
      key={key}
      to={to}
      activeClass='active'
      smooth={true}
      spy={true}
      offset={offset}
    >
      {icon}
    </Link>
  ));
};

const Nav = (): JSX.Element => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          {renderLinks(navLinks)}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
