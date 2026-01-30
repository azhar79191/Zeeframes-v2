import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/images/logo.png";
import { Button } from "../ui/button";
import { Arrowup1,Dropdown, Toggle } from "@/assets/images";
import MegaDropdown from "@/components/MegaDropdown";

const headerLinks = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Services', path: '/services' },
  { text: 'Work', path: '/work' },
  { text: 'Insights', path: '/insights' }
];

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [showMega, setShowMega] = useState(false);
  const [activeTab, setActiveTab] = useState('uiux');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine active tab based on current URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabFromUrl = searchParams.get('tab');
    
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    } else if (pathname.includes('/services/')) {
      // Determine tab based on service path
      if (pathname.includes('brand-')) {
        setActiveTab('branding');
      } else if (pathname.includes('ui-ux-')) {
        setActiveTab('uiux');
      } else {
        setActiveTab('nocode');
      }
    }
  }, [location]);

  return (
    <header className="bg-[#0D0D0D] sticky top-0 z-70">
        <nav className="flex items-center justify-between py-5 sm:py-5.5 px-4 sm:px-20 relative">

          {/* LOGO */}
          <Link aria-label="logolink" to="/">
            <img src={logo} alt="Logo" className="h-9 w-45" />
          </Link>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden block text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Toggle />
          </button>

          {/* NAV LINKS */}
          <ul className={`lg:flex gap-8 text-white ${
            isMobileMenuOpen 
              ? 'flex flex-col absolute top-full left-0 w-full bg-[#0D0D0D] items-center h-screen' 
              : 'hidden'
          }`}>
            {headerLinks.map((item, index) => {
              const isActive = pathname === item.path || (item.text === "Services" && pathname.startsWith('/services/'));
              const isServices = item.text === "Services";

              return (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => isServices && setShowMega(true)}
                  onMouseLeave={() => isServices && setShowMega(false)}
                >
                  <Link
                    to={item.path}
                    className={`text-lg leading-[27px] transition-colors
                    ${isActive ? 'text-[#F3FE00]' : 'text-[#FFF]'}`}
                  >
                    <span className="flex items-center gap-2">
                      {item.text}

                      {isServices && (
                        <span>
                          <Dropdown />
                        </span>
                      )}
                    </span>

                    {isActive && (
                      <span className="absolute left-2 -bottom-1 w-7 h-[2px] bg-[#F3FE00] rounded-full"></span>
                    )}
                  </Link>


                  {/* MEGA DROPDOWN */}
                  {isServices && showMega && (
                    <div
                      className="absolute left-1/2 top-full w-screen -translate-x-1/2 lg:block hidden"
                      onMouseEnter={() => setShowMega(true)}
                      onMouseLeave={() => setShowMega(false)}
                    >
                      <MegaDropdown activeTab={activeTab} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA BUTTON */}
          <Button variant="default" size="default" className="relative group lg:block hidden">
            <span className="flex items-center gap-3 transition-opacity group-hover:opacity-0">
              Work with us
              <Arrowup1 />
            </span>

            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              Lets talk
            </span>
          </Button>

        </nav>
    </header>
  );
};

export default Header;
