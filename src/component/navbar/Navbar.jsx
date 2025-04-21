export const Navbar = () => {
  return (
    <div className="z-30 bg-white/80 w-fill h-18 px-28 max-sm:px-5 backdrop-blur-sm sticky top-0 flex justify-between max-sm:justify-between items-center  shadow-md">
      <div className="max-sm:text-lg text-3xl">
        <p className=" font-bold">LifeStyleo.</p>
      </div>
      <div className="max-sm:block hidden">
        <i className="bi bi-house"></i>
      </div>
      {/* <div className="msx-sm:hidden">
        <ul className="flex gap-x-8 capitalize text-md">
          <li>home</li>
          <li>shop</li>
          <li>product</li>
          <li>blog</li>
          <li>pages</li>
        </ul>
      </div> */}
      <div className="max-sm:hidden">
        <ul className="flex gap-x-5 capitalize text-lg">
          <li>
            <i className="bi bi-search"></i>
          </li>
          <li>
            <i className="bi bi-person text-xl"></i>
          </li>
          <li>
            <i className="bi bi-heart"></i>
          </li>
          <li>
            <i className="bi bi-cart3"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
