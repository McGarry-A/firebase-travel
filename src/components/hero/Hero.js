const Hero = () => {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-center">
          <span className="text_isWavy">
            Revolutionize
          </span>{" "}
          Your Meal Prep With RecipiPanda
        </h1>
        <p className="text-lg text-gray-500 mt-2 text-center w-full mx-auto tracking-wide">
          Easily crowdsource and review recipies with the number 1 community for
          recipie sharing and review!
        </p>
        <div className="mt-6 flex flex-1 p-6 justify-center">
          <button className="btn">
            Sign Up
          </button>
          <button className="ml-6 btn btn_isHollow">
            Log In
          </button>
        </div>
      </div>

      {/* hide on mobile */}
      <div></div>
    </div>
  );
};

export default Hero;
