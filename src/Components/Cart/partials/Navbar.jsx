import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarTopBarPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      {/*<!-- Header --> */}
      <header className="fixed top-0 z-20 w-full after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:after:hidden bg-[#efefef] font-inter">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[4rem] items-center justify-between gap-1"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 focus:outline-none lg:flex-1"
              href="/"
            >
              <img src="https://dl.dropboxusercontent.com/scl/fi/nvp6v4iavdkrcal9cprxi/Product-and-Cart-Logo.png?rlkey=3do18vgh5gsx8sz97ppmuea42&st=g03pvxag&dl=0" width={45}/>
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-[#7A7A7A] transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-[#7A7A7A] transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-[#7A7A7A] transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <div>
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute top-0 left-0 z-[-1] h-[17.5rem] w-full justify-center lg:gap-0 overflow-hidden overflow-y-auto overscroll-contain bg-[#efefef] px-8 pb-12 pt-24 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100  ${
                  isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
              >
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-7 text-[#7A7A7A]"
                    to="/"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300  focus:outline-none focus-visible:outline-none lg:px-7 text-[#7A7A7A]"
                    to="/products"
                  >
                    <span>Products</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300  focus:outline-none focus-visible:outline-none font-semibold lg:px-7 text-[#000000]"
                    to="/products/cart"
                  >
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
              <div className="lg:flex gap-2 items-center size-7">
                <Link className="hidden" to="/products/cart">
                  <img
                    className="w-full h-full object-cover"
                    src="https://dl.dropboxusercontent.com/scl/fi/kagtre6hqvjt432u8suzp/1540167_bag_basket_buy_cart_luggage_icon.png?rlkey=pci5lvatsgizslggdu1vsvztg&st=ralsb22f&dl=0"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}
