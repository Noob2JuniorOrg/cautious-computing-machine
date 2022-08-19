import logo from '../assets/logo.svg';

export const NavigationDesktop = () => {
  return (
    <nav class="flex justify-between font-normal  font-alata nav-desktop">
      <a href="http://127.0.0.1:5500/landing_page/main/index.html">
        <div class="header-logo-image-wrapper">
          <img src={logo} alt="logo" />
        </div>
      </a>

      <ul className="m-0 list-none flex p-0 text-white">
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1">
            About
          </a>
        </li>
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1">
            Careers
          </a>
        </li>
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1">
            Events
          </a>
        </li>
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1">
            Products
          </a>
        </li>
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1">
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};
