const shipping = [
  {
    _id: 1,
    icon: "bi-arrow-return-left",
    name: "14-day returns",
    mssg: "risk-free shopping with easy returns",
  },
  {
    _id: 2,
    icon: "bi-truck",
    name: "free shipping",
    mssg: "no extra cost, just the price you see",
  },
  {
    _id: 3,
    icon: "bi-headset",
    name: "24/7 support",
    mssg: "24/7 support, always here just for you ",
  },
  {
    _id: 4,
    icon: "bi-patch-check",
    name: "member discounts",
    mssg: " special price for our loyal customers.",
  },
];
export const ShippingBanner = () => {
  return (
    <div className="mb-16 py-4 grid grid-cols-4 max-sm:grid-cols-2">
      {shipping.map((item) => (
        <div key={item._id}>
          <div className="my-3 flex justify-center items-center text-5xl ">
            <i className={`bi ${item.icon}`}></i>
          </div>
          <h2 className="my-2 text-2xl font-semibold text-center">
            {item.name}
          </h2>
          <p className="text-center text-gray-600">{item.mssg}</p>
        </div>
      ))}
    </div>
  );
};
