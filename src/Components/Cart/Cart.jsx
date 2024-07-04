import React, { useContext, useState, useEffect, useRef } from "react";
import NavbarTopBarPreview from "./partials/Navbar";
import { CartContext } from "../../CartContext";
import "remixicon/fonts/remixicon.css";
import EmptyCart from "./partials/EmptyCart";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateCartItemQuantity,
    getRecommendedProducts,
    addToCart,
  } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    pinCode: "",
    address: "",
  });
  const [formFilled, setFormFilled] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [disableSelectSize, setDisableSelectSize] = useState({});
  const [currentSlides, setCurrentSlides] = useState({}); 
  const sliders = useRef({}); 

  useEffect(() => {
    
    let total = 0,
      savings = 0;

    cartItems.forEach((item) => {
      const originalPrice = parseFloat(
        item.OriginalPrice.replace("₹", "").replace(",", "")
      );
      const priceLineThrough = parseFloat(
        item.PriceLineThrough.replace("₹", "").replace(",", "")
      );
      total += item.quantity * originalPrice;
      savings += item.quantity * (priceLineThrough - originalPrice);
    });

    setTotalPrice(total);
    setTotalSavings(savings);

    const { fullName, email, pinCode, address } = form;
    setFormFilled(
      fullName !== "" && email !== "" && pinCode !== "" && address !== ""
    );
  }, [cartItems, form]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateCartItemQuantity(productId, newQuantity);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (e, productId) => {
    const selectedSize = e.target.value;
    setSelectedOptions({ ...selectedOptions, [productId]: selectedSize });
    setDisableSelectSize({ ...disableSelectSize, [productId]: true });

    const selectedProduct = getRecommendedProducts().find(
      (product) => product.id === productId
    );

    if (selectedProduct) {
      const productToAdd = {
        ...selectedProduct,
        selectedOption: selectedSize,
      };
      addToCart(productToAdd);
    }
  };

  const handleAddToCart = (product) => {
    const selectedOption = selectedOptions[product.id];
    if (!selectedOption) {
      alert("Please select a size before adding to cart.");
      return;
    }
    const productWithOption = { ...product, selectedOption };

    if (
      cartItems.some(
        (item) =>
          item.id === product.id && item.selectedOption === selectedOption
      )
    ) {
      removeFromCart(productWithOption);
    } else {
      addToCart(productWithOption);
    }
  };

  const handleCheckout = () => {
    if (!formFilled) {
      alert("Please fill out all the shipping details before checking out.");
      return;
    }

    let message = `*Order Details:*\n\n`;

    cartItems.forEach((item) => {
      const totalPriceItem = (
        item.quantity *
        parseFloat(item.OriginalPrice.replace("₹", "").replace(",", ""))
      ).toFixed(2);
      message += `*Product Name:* ${item.ProductName}\n`;
      message += `*Size:* ${item.selectedOption}\n`; 
      message += `*Quantity:* ${item.quantity}\n`;
      message += `*Price:* ₹${totalPriceItem}/-\n\n`;
    });

    message += `*Total Savings:* ₹${totalSavings.toFixed(2)}/-\n`;
    message += `*Total Price:* ₹${totalPrice.toFixed(2)}/-\n\n`;
    message += `*Shipping Details:*\n\n`;
    message += `*Full Name:* ${form.fullName}\n`;
    message += `*Email:* ${form.email}\n`;
    message += `*Pin Code:* ${form.pinCode}\n`;
    message += `*Address:* ${form.address}\n\n`;
    message += `*Your order is placed, Thank you for choosing shreecrafteria !!!*`;

    const PhoneNumber = "+917069166225";
    const whatsappURL = `https://wa.me/${PhoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  const getSettings = (productId) => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    customPaging: (i) => (
      <div
        className="custom-dot"
        style={{
          backgroundColor: currentSlides[productId] === i ? "#000" : "#d8d8d8",
        }}
        onClick={() => sliders.current[productId].slickGoTo(i)}
      />
    ),
    appendDots: (dots) => (
      <div style={{ textAlign: "center", marginTop: 0 }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots slick-thumb",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlides((prevState) => ({
        ...prevState,
        [productId]: newIndex,
      }));
    },
  });

  return (
    <>
      <NavbarTopBarPreview />
      <main className="w-full overflow-x-hidden py-10 bg-[#ffffff]">
        <div className="pixel mt-20 px-7 lg:px-32">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className={`Products_detail ${
                index === 0 ? "border-t-2" : ""
              } border-b-2 py-10`}
            >
              <div className="mobile_div lg:hidden">
                <div className="mobile picture lg:hidden mx-auto lg:mx-0 overflow-hidden w-full">
                  <img
                    className="w-full rounded-md h-full object-cover"
                    src={item.Images[0]} 
                    alt=""
                  />
                </div>
                <div className="p_image_details_ w-full">
                  <div className="p_name_ruppes mt-10 lg:mt-0 flex items-center justify-between">
                    <div className="p_name">
                      <h1 className="font-inter text-[22px] font-medium text-[#000000]">
                        {item.ProductName}
                      </h1>
                      <h3 className="P_size font-inter text-[18px] text-[#000000]">
                        {item.selectedOption}
                      </h3>{" "}
                    </div>
                    <h1 className="p_ruppess font-inter text-[22px] font-medium text-[#000000]">
                      ₹
                      {(
                        item.quantity *
                        parseFloat(
                          item.OriginalPrice.replace("₹", "").replace(",", "")
                        )
                      ).toFixed(2)}
                      /-
                    </h1>
                  </div>
                  <div className="p_quantity_remove-btn mt-5 flex items-center justify-between py-2">
                    <select
                      className="outline-none bg-white text-[22px] font-medium"
                      defaultValue={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      ))}
                    </select>
                    <button
                      className="bg-red-500 px-2 rounded-lg text-white py-2 font-medium"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="pc_div hidden lg:flex items-center justify-between">
                <div className="picture overflow-hidden w-[300px]">
                  <img
                    className="w-full rounded-md h-full object-cover"
                    src={item.Images[0]}
                    alt=""
                  />
                </div>
                <div className="p_name">
                  <h1 className="font-inter text-[32px] font-medium text-[#000000]">
                    {item.ProductName}
                  </h1>
                  <h3 className="P_size font-inter text-[16px] text-[#000000]">
                    {item.selectedOption}
                  </h3>{" "}
                  
                </div>
                <select
                  className="outline-none text-[22px] font-medium"
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
                <h1 className="p_ruppes font-inter text-[32px] font-medium text-[#000000]">
                  ₹
                  {(
                    item.quantity *
                    parseFloat(
                      item.OriginalPrice.replace("₹", "").replace(",", "")
                    )
                  ).toFixed(2)}
                  /-
                </h1>
              </div>
              <button
                className="text-red-600 hidden lg:flex float-right font-medium"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="free_stand w-full px-10 lg:px-60 border-b-2 py-4 flex items-center justify-between lg:justify-center ml-0 lg:gap-3 gap-2">
          <h1 className="font-inter text-[22px] font-medium text-[#000000]">
            Free Easel Stand
          </h1>
          <img
            className="size-16"
            src="https://www.theartconnect.in/cdn/shop/products/BuyWoodenEasel_CanvasStand4inchesOnlineinIndia-TheArtConnect_933fd692-d56e-496b-a562-341eb6b8d4ba.jpg?v=1632237831"
            alt=""
          />
        </div>
        <div className="shipping_details px-7 lg:px-60 py-5 lg:py-10 bg-[#f3f3f3] border-b-2">
          <h1 className="text-center font-inter text-[22px] lg:text-[27px] font-medium text-[#000000]">
            Shipping Details
          </h1>
          <form action="" className="mt-7">
            <input
              className="w-full outline-none border-[1.5px] rounded-[8px] py-2 px-5 lg:py-4 placeholder:text-[#696969] placeholder:font-medium border-black"
              type="text"
              placeholder="Full name"
              name="fullName"
              value={form.fullName}
              onChange={handleInputChange}
              required
            />
            <div className="email_pincode lg:flex lg:gap-3">
              <input
                className="lg:w-[70%] w-full outline-none border-[1.5px] rounded-[8px] py-2 px-5 lg:py-4 placeholder:text-[#696969] placeholder:font-medium border-black mt-3"
                type="email"
                placeholder="E-Mail"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
              />
              <input
                className="lg:w-[30%] w-full outline-none border-[1.5px] rounded-[8px] py-2 px-5 lg:py-4 placeholder:text-[#696969] placeholder:font-medium border-black mt-3"
                type="number"
                placeholder="Pin code"
                name="pinCode"
                value={form.pinCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <textarea
              className="w-full outline-none border-[1.5px] resize-none rounded-[8px] pt-2 pb-10 px-5 lg:py-4 lg:pb-20 placeholder:text-[#696969] placeholder:font-medium border-black mt-3"
              placeholder="Address"
              name="address"
              value={form.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </form>
        </div>
        <div className="total px-7 lg:px-60 mt-10 border-b-2 py-10 ">
          <div className="subtotal flex items-center justify-between">
            <h1 className="font-inter text-[18px] text-[#000000]">Subtotal</h1>
            <h1 className="font-inter text-[15px] text-[#000000]">
              ₹{totalPrice.toFixed(2)}/-
            </h1>
          </div>
          <div className="shipping flex mt-1 items-center justify-between">
            <h1 className="font-inter text-[18px] text-[#000000]">Shipping</h1>
            <h1 className="font-inter text-[15px] text-[#000000]">Free</h1>
          </div>
          <div className="total mt-10 flex items-end justify-between">
            <h1 className="font-inter text-[32px] font-semibold text-[#000000]">
              Total
            </h1>
            <div className="discount_total flex flex-col items-end">
              <h1 className="font-inter text-[15px] text-[#00B132]">
                Your Total Savings: ₹{totalSavings.toFixed(2)}/-
              </h1>
              <h1 className="font-inter mt-3 text-[28px] font-medium text-[#000000]">
                ₹{totalPrice.toFixed(2)}/-
              </h1>
            </div>
          </div>
          <div className="checkout mt-10 flex gap-2 items-center justify-end">
            <button
              className="border-[1.5px] text-[15px] inline-block lg:text-[18px] px-6 hover:bg-black hover:text-white active:bg-black active:text-white duration-300 lg:px-6 font-semibold py-2 rounded-full border-[#000000]"
              onClick={handleCheckout}
            >
              Check out
            </button>
            <i className="ri-whatsapp-fill text-[28px]"></i>
          </div>
        </div>
        <div className="you_may_also_like px-7 lg:px-20 pt-16">
          <h1 className="capitalize font-inter text-[26px] lg:text-[32px] text-center font-semibold text-[#000000]">
            You May Also Like
          </h1>
          <div className="recommended_products flex flex-col justify-center">
            {getRecommendedProducts()
              .slice(0, 3)
              .map((product) => (
                <div key={product.id} className="mt-20 lg:mt-32">
                  <Slider
                ref={(slider) => (sliders.current[product.id] = slider)}
                {...getSettings(product.id)}
              >
                {product.Images.map((image, index) => (
                  <div
                    key={index}
                    className="P_image mt-5 w-full h-[15rem] lg:h-[40rem] px-2"
                  >
                    <LazyLoadImage
                      className="w-full h-full rounded-[20px] object-cover object-center"
                      src={image}
                      alt={product.ProductName}
                      effect="blur"
                    />
                  </div>
                ))}
              </Slider>
                  <div className="product_details mt-7 lg:mt-5 flex items-center justify-between">
                    <div className="p_name_select flex flex-col items-start">
                      <h1 className="capitalize font-inter text-[20px] lg:text-[28px] text-center font-semibold text-[#000000]">
                        {product.ProductName}
                      </h1>
                      <select
                        className="select-blue mt-3 outline-none font-inter tracking-tight bg-[#f2f2f2] py-3 px-1 rounded-[10px]"
                        value={selectedOptions[product.id] || ""}
                        onChange={(e) => handleSelectChange(e, product.id)}
                      >
                        <option
                          className="font-inter font-medium"
                          value=""
                          disabled={disableSelectSize[product.id]}
                        >
                          Select Size
                        </option>
                        <option value={product.MDFSize1}>
                          {product.MDFSize1}
                        </option>
                        <option value={product.MDFSize2}>
                          {product.MDFSize2}
                        </option>
                      </select>
                    </div>
                    <div className="price_add_to_cart flex flex-col">
                      <h1 className="capitalize font-inter text-[20px] lg:text-[28px] text-center font-medium text-[#000000]">
                        {product.OriginalPrice}
                      </h1>
                      <button
                        className="border-[1.5px] mt-3 text-[15px] inline-block lg:text-[18px] px-6 hover:bg-black hover:text-white active:bg-black active:text-white duration-300 lg:px-6 font-semibold py-2 float-right rounded-full border-[#000000]"
                        onClick={() => handleAddToCart(product)}
                      >
                        {cartItems.some((item) => item.id === product.id)
                          ? "Remove"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
