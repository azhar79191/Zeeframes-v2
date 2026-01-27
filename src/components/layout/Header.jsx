import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { Button } from "../ui/button";
import { Arrowup1 } from "@/assets/images";

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
        <Link aria-label="logolink" to="#">
        <img src={logo} alt="Logo" className="h-9 w-45" />
          </Link>

        <ul className="flex gap-8 text-white">
          {headerLinks.map((item, index) => (
            <li>
              <Link to={item.path} className={`text-lg leading-[27px] ${pathname === item.path ? 'text-[#F3FE00]' : 'text-[#FFF]'}`}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
          <Button variant="default" size="default" className="relative group">
            <span className="flex items-center gap-3 justify-center transition-opacity group-hover:opacity-0">
              Work with us
             <Arrowup1/>
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
