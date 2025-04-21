const social = [
  {
    _id: "1",
    name: "Instagram",
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg", // assorted clothes (fashion-related)
  },
  {
    _id: "2",
    name: "Facebook",
    image: "https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg", // clothes on hangers (fashion retail)
  },
  {
    _id: "3",
    name: "Pinterest",
    image: "https://images.pexels.com/photos/532588/pexels-photo-532588.jpeg", // denim jacket (fashionable outerwear)
  },
  {
    _id: "4",
    name: "Twitter (X)",
    image: "https://images.pexels.com/photos/1819644/pexels-photo-1819644.jpeg", // flat lay of clothes (fashionable set)
  },
  {
    _id: "5",
    name: "TikTok",
    image: "https://images.pexels.com/photos/265766/pexels-photo-265766.jpeg", // fashion flat lay (accessories + apparel)
  },
  {
    _id: "6",
    name: "youtube",
    image: "https://images.pexels.com/photos/265766/pexels-photo-265766.jpeg", // fashion flat lay (accessories + apparel)
  },
];

export const SocialCard = () => {
  return (
    <div className=" py-5 px-20 max-sm:px-2">
      <h1 className="my-3 text-5xl max-sm:text-3xl capitalize text-center ">
        shop instagram
      </h1>
      <p className="text-center text-gray-600">
        Elevate your wardrobe with fresh finds today
      </p>
      <div className="w-full h-64 max-sm:h-96 my-10 grid grid-cols-6 gap-5 max-sm:grid-cols-2 ">
        {social.map((item) => (
          <div
            key={item._id}
            className=" border border-gray-400 rounded-md overflow-hidden"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
