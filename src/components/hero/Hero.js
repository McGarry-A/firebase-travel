const Hero = () => {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-4xl font-bold text-center leading-normal tracking-wide">
          <span className="underline decoration-violet-800 decoration-wavy">
            Revolutionize
          </span>{" "}
          your meal prep with RecipiPanda
        </h1>
        <h2 className="text-xl text-gray-500 mt-2 text-center w-10/12 mx-auto tracking-wide">
          Easily crowdsource and review recipies with the number 1 community for
          recipie sharing and review!
        </h2>
        <div className="mt-6 flex flex-1 p-6 justify-center">
          <button className="border-2 py-2 px-8 bg-violet-800 border-violet-800 rounded-lg cursor-pointer text-lg hover:bg-transparent transition">
            Sign Up
          </button>
          <button className="ml-6 border-2 py-2 px-8 rounded-lg cursor-pointer text-lg hover:bg-violet-800 hover:border-violet-800 transition">
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
