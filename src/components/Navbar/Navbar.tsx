
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md  navbar-custom-css px-5 ">
      <div className="container-fluid p-0">
        <a className="navbar-brand m-0 " href="#">
          <span className=" NavbarTextColourCss navbar-brand-name p-0 m-0">
            Report
          </span>
          <span className="hub-styling">
            <span className="navbar-brand-name hub-inner-styling p-0">hub</span>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid collapse navbar-collapse px-md-5" id="navbarNav">
          <div className="displayCenterOnBigScreens ">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link  NavbarTextColourCss"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link NavbarTextColourCss" href="#">
                  Complaints
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar