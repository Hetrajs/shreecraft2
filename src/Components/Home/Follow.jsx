const Follow = () => {
  return (
    <>
      <section className="bg-black">
        <div className="bg">
          <div className=" container mx-auto px-6 py-20 max-w-[1300px] w-full">
            <div className="grid mx-auto w-full place-items-center gap-6 lg:gap-8">
              <div className=" text-white space-y-7 text-center">
                <h1 className="text-3xl lg:text-5xl font-roboto font-semibold">
                  Follow us
                </h1>
                <h2 className="text-lg lg:text-2xl font-inter font-semibold">
                  Join our socials for latest updates regarding art
                </h2>
              </div>
              <div className="flex gap-6 items-center my-6 lg:my-16 lg:gap-10">
                <a href="/">
                  <img
                    className="max-w-[40px] lg:max-w-[60px]"
                    src="WhatsApp.svg"
                  />
                </a>
                <a href="/">
                  <img
                    className="max-w-[40px] lg:max-w-[60px]"
                    src="YouTube.svg"
                  />
                </a>
                <a href="/">
                  <img
                    className="max-w-[40px] lg:max-w-[60px]"
                    src="Instagram.svg"
                  />
                </a>
                <a href="/">
                  <img
                    className="max-w-[40px] lg:max-w-[60px]"
                    src="Facebook.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Follow;
