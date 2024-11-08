import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | GADGET HEAVEN";
  }, []);
  return (
    <div>
      <div className="bg-customColor text-center pt-5">
        <h3 className="text-3xl font-bold  text-white">Contact Us</h3>
        <p className="text-sm md:text-base text-center mt-4 text-white/90 mb-5 pb-8">
          Need help with our gadget? Contact Gadget Heaven for support, Product
          info, or any <br /> question-we're here to assist you.
        </p>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Access your account to explore exclusive gadgets, manage your
              orders and enjoy a personalized shopping experience at Gadget
              Heaven.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-customColor text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
