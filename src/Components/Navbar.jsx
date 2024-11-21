const Navbar = () => {
  return (
    <>
      <nav className="text-white h-16">
        <div className="container px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="text-lg font-bold">
                Sleep Manager
              </a>
            </div>
            <div className="flex items-center">
              <a href="#" className="ml-3 text-sm font-medium leading-relaxed">
                Home
              </a>
              <a href="#" className="ml-3 text-sm font-medium leading-relaxed">
                About
              </a>
              <a href="#" className="ml-3 text-sm font-medium leading-relaxed">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
