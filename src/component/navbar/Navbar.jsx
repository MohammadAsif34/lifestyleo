export const Navbar = () => {
  return (
    <div className="z-30 bg-white/80 w-fill h-18 px-28 backdrop-blur-sm sticky top-0 flex justify-between items-center  shadow-md">
      <div>
        <p className="text-3xl font-bold">LifeStyleo.</p>
      </div>
      <div>
        <ul className="flex gap-x-8 capitalize text-md">
          <li>home</li>
          <li>shop</li>
          <li>product</li>
          <li>blog</li>
          <li>pages</li>
        </ul>
      </div>
      <div>
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
