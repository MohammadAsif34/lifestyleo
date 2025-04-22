import { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";
// import { AppContext } from "../../context/appContext";

export const Navbar = () => {
  const { cart, setCart } = useContext(AppContext);
  const [homeOpen, setHomeOpen] = useState(false);
  return (
    <div className="z-30 bg-white/80 w-fill h-18 px-28 max-sm:px-5 backdrop-blur-sm sticky top-0 flex justify-between max-sm:justify-between items-center  shadow-md">
      <div className="max-sm:text-lg text-3xl">
        <p className=" font-bold">LifeStyleo.</p>
      </div>
      <div className="max-sm:block hidden ">
        <span className="" onClick={() => setHomeOpen(!homeOpen)}>
          <i className="bi bi-house"></i>
        </span>
        {homeOpen && (
          <div className="w-[250px] h-screen absolute top-0 right-0 border border-gray-300 shadow-lg bg-white flex flex-col transition-transform duration-700 ease-in-out ">
            <span className="px-2" onClick={() => setHomeOpen(!homeOpen)}>
              <i className="bi bi-x text-3xl"></i>
            </span>
            <div className="flex flex-c justify-between items-center p-2 mb-4 border-b border-gray-300">
              <p className="text-lg font-semibold">name</p>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/lifestyleo.svg"
                  alt=""
                  className="w-full h-full obj-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <ul className="px-4 text-lg capitalize flex flex-col gap-2">
                <li className="cursor-pointer">home</li>
                <li className="cursor-pointer">shop</li>
                <li className="cursor-pointer">product</li>
                <li className="cursor-pointer">blog</li>
                <li className="cursor-pointer">pages</li>
              </ul>
            </div>
            <div className="py-4">
              <ul className="px-4 capitalize text-lg flex flex-col gap-3">
                <li
                  onClick={() => {
                    setCart(!cart);
                    setHomeOpen(!homeOpen);
                  }}
                >
                  <i className="bi bi-cart3 pr-3"></i>cart
                </li>
                <li>
                  <i className="bi bi-heart pr-3"></i>favorite
                </li>
                <li className="border border-gray-300"></li>
                <li>
                  <i className="bi bi-gear pr-3"></i>setting
                </li>
                <li>
                  <i className="bi bi-info-circle pr-3"></i>Help
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="max-sm:hidden">
        <ul className="flex items-center gap-x-8 capitalize text-md">
          <li className="cursor-pointer hover:border-b-2 pb-2 px-2">home</li>
          <li className="cursor-pointer hover:border-b-2 pb-2 px-2">shop</li>
          <li className="cursor-pointer hover:border-b-2 pb-2 px-2">product</li>
          <li className="cursor-pointer hover:border-b-2 pb-2 px-2">blog</li>
          <li className="cursor-pointer hover:border-b-2 pb-2 px-2">pages</li>
        </ul>
      </div>
      <div className="max-sm:hidden">
        <ul className="flex gap-x-6 capitalize text-xl">
          <li className="cursor-pointer ">
            <i className="bi bi-search"></i>
          </li>
          <li className="cursor-pointer ">
            <i className="bi bi-person text-xl"></i>
          </li>
          <li className="cursor-pointer ">
            <i className="bi bi-heart"></i>
          </li>
          <li className="cursor-pointer " onClick={() => setCart(!cart)}>
            <i className="bi bi-cart3"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
