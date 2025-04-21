export const Footer = () => {
  return (
    <footer className="w-full px-20 max-sm:px-2 h-fit border-t-2 border-gray-300">
      <div className=" my-16 max-sm:my-8 flex  justify-between gap-8 max-sm:flex-col ">
        <div className="flex-2 flex flex-col gap-1 max-sm:pl-2">
          <h1 className="mb-4 font-semibold text-lg max-sm:text-2xl max-sm:font-semibold capitalize ">
            LifeStyleo
          </h1>
          <p className="text-gray-400">
            94A/2, Den street, Kolkata West Bengal
          </p>
          <a
            href=""
            className="w-fit px-4 py-2 my-2 text-md text-white capitalize bg-gray-900 rounded-full "
          >
            get direction <i className="bi bi-arrow-up-right pl-2"></i>
          </a>
          <p className="text-gray-400">
            <i className="bi bi-envelope mr-2 "></i> example@gmail.com
          </p>
          <p className="text-gray-400">
            <i className="bi bi-telephone mr-2"></i> +91 12345 67890
          </p>
          <ul className="my-4 flex gap-3 text-xl">
            <li className="px-3 py-2 border rounded-full cursor-pointer">
              <i className="bi bi-facebook"></i>
            </li>
            <li className="px-3 py-2 border rounded-full cursor-pointer">
              <i className="bi bi-twitter-x"></i>
            </li>
            <li className="px-3 py-2 border rounded-full cursor-pointer">
              <i className="bi bi-instagram"></i>
            </li>
            <li className="px-3 py-2 border rounded-full cursor-pointer">
              <i className="bi bi-youtube"></i>
            </li>
            <li className="px-3 py-2 border rounded-full cursor-pointer">
              <i className="bi bi-amazon"></i>
            </li>
            <li className="px-3 py-2 border rounded-full cursor-pointer">
              <i className="bi bi-pinterest"></i>
            </li>
          </ul>
        </div>
        <div className="mx-5">
          <h1 className="mb-4 font-semibold text-lg capitalize">information</h1>

          <ul className="capitalize text-md text-gray-500 flex flex-col gap-2">
            <li>about us</li>
            <li>our stories</li>
            <li>guide size</li>
            <li>contact us</li>
            <li>career</li>
            <li>my account</li>
          </ul>
        </div>
        <div className="mx-5">
          <h1 className="mb-4 font-semibold text-lg capitalize">
            customer and service
          </h1>
          <ul className="capitalize text-md text-gray-500 flex flex-col gap-2">
            <li>shipping</li>
            <li>return & refund</li>
            <li>privacy policy</li>
            <li>terms & conditions</li>
            <li>order FAQs</li>
            <li>my wishlist</li>
          </ul>
        </div>
        <div className="flex-2">
          <h1 className="mb-4 font-semibold text-lg">News Letter</h1>
          <p className="my-3 text-sm text-gray-500">
            Sign up for our newsletter and get 10% off on your first purchase
          </p>
          <form>
            <div className="p-1 h-12 my-4 border-2 rounded-full flex items-center">
              <input
                type="email"
                placeholder="Enter your Email..."
                className="w-full px-4 outline-0 text-gray-400"
              />
              <button className=" mb-1  bi-arrow-up-right-circle-fill text-4xl"></button>
            </div>
            <label htmlFor="" className="px-3 text-sm text-gray-400 ">
              <input type="checkbox" name="" id="" className="mr-2" />
              By clicking subscribe, you agree to{" "}
              <a className="underline font-semibold">
                Terms of Service
              </a> and{" "}
              <a className="underline font-semibold ">Privacy Policy</a>
            </label>
          </form>
        </div>
      </div>
      <div className="py-3 border-t-2 border-gray-300 flex max-sm:flex-col justify-between gap-8 max-sm:gap-2">
        <p className="text-sm text-gray-400">
          &copy;2025 LifeStyle, All rights Reserved
        </p>
        <div className="flex items-center gap-2">
          <p>payment:</p>
          <img width={50} height={20} src="/visa.png" alt="" />
          <img width={50} height={20} src="/visa.png" alt="" />
          <img width={50} height={20} src="/visa.png" alt="" />
          <img width={50} height={20} src="/visa.png" alt="" />
        </div>
      </div>
    </footer>
  );
};
