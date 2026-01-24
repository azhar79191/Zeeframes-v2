import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { Button } from "../ui/button";

const headerLinks = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'About',
    path: '/about'
  },
  {
    text: 'Services',
    path: '/services'
  },
  {
    text: 'Work',
    path: '/work'
  },
  {
    text: 'Insights',
    path: '/insights'
  }
];

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <header className="bg-[#0D0D0D] py-5.5 sticky top-0 z-70">
      <div className="container">
      <nav className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-9 w-45" />

        <ul className="flex gap-8 text-white">
          {headerLinks.map((item, index) => (
            <li>
              <Link to={item.path} className={`text-base leading-6 ${pathname === item.path ? 'text-[#F3FE00]' : 'text-[#FFF]'}`}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
          <Button variant="default" size="default" className="relative group">
            <span className="flex items-center gap-3 justify-center transition-opacity group-hover:opacity-0">
              Work with us
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.5833 5.4165L5 14.9998" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66669 5H15V13.3333" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              Lets talk
            </span>
          </Button>

      </nav>
      </div>
    </header>
  );
};

export default Header;
