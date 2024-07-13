const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/images/banner.png" className="shadow-xl" />

        <div>
          <h1 className="text-5xl font-bold">Buy Fresh Food</h1>
          <p className="py-6">
            Enjoy top-quality, flavorful, and nutritious produce, dairy, and
            meats from <br /> local markets. Fresh food supports health,
            sustainability, and enhances <br /> every meal. Choose fresh for a
            better taste and better living.
          </p>
          <button className="btn bg-gradient-to-r from-blue-200 to-cyan-200 hover:bg-gradient-to-r from-blue-300 to-cyan-400">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
