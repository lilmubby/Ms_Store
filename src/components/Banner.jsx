const BannerItems = [
  {
    imgSrc: "",
    title: "",
    description: "",
    name: "",
  },
  {
    imgSrc: "",
    title: "",
    description: "",
    name: "",
  },
  {
    imgSrc: "",
    title: "",
    description: "",
    name: "",
  },
];

const Banner = () => {
  return (
    <div>
      {BannerItems.map((item) => (
        <div>
          <div className="banner_text">
            <h2>{item.title}</h2>
            <h3>{item.name}</h3>
            <p>{description}</p>
          </div>
          <div className="banner_img_container">
            <img src={item.imgSrc} alt="Banner Image" className="banner_img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
