const Footer = () => {
  return (
    <footer className="  bg-base-200 text-base-content p-10 mt-40">
      <div className="space-y-3 text-center">
        <h3 className="text-3xl font-bold">Gadget Heaven</h3>
        <p className="text-gray-500 text-sm">
          Leading the way in cutting-edge technology and innovation
        </p>
      </div>
      <hr className="my-8" />
      <div className="flex justify-evenly">
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Product Support
          </a>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Order Tracking
          </a>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Shipping & Delivery
          </a>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Returns
          </a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            About us
          </a>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Careers
          </a>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Contact
          </a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Terms of use
          </a>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Privacy policy
          </a>
          <a className="link link-hover text-sm text-gray-500 pt-1.5">
            Cookie policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
