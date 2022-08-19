export const NavigationMobile = (props) => {
  <nav class="hidden flex justify-between font-normal font-alata nav-mobile">
    <a href="http://127.0.0.1:5500/landing_page/main/index.html">
      <div class="header-logo-image-wrapper">
        <img src="../main/images/logo.svg" alt="logo" />
      </div>
    </a>

    <div class="hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
        </g>
      </svg>
    </div>

    <div class="exit">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path
          d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
          fill="#FFF"
          fill-rule="evenodd"
        />
      </svg>
    </div>

    <div class="nav-mobile-content">
      <div class="nav-mobile-header-container">
        <div class="header-logo-image-wrapper">
          <img src="../main/images/logo.svg" alt="logo" />
        </div>
      </div>

      <ul className="m-0 list-none flex p-0">
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1 white">
            About
          </a>
        </li>
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1 white">
            Careers
          </a>
        </li>
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1 white">
            Events
          </a>
        </li>
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1 white">
            Products
          </a>
        </li>
        <li className="py-2.5 pr-5 pl-0">
          <a href="#" className="no-underline relative pb-1 white">
            Support
          </a>
        </li>
      </ul>
    </div>
  </nav>;
};
