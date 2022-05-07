const CreateAccountCta = () => (
  <div className="p-6 my-6">
    <h1 className="text-2xl font-bold text-center leading-normal tracking-wide">
      Join us at <span className="underline decoration-violet-600 decoration-wavy">RecipiePanda</span> to browse and save recipies online
    </h1>
    <h2 className="text-md text-gray-500 mt-2 text-center w-full mx-auto tracking-wide">
      Easily crowdsource and review recipies with the number 1 community for
      recipie sharing and review!
    </h2>
    <div className="mt-6 flex flex-1 p-6 justify-center">
      <button className="uppercase tracking-wider font-semibold border-2 py-2 px-8 w-full bg-violet-800 border-violet-800 rounded-lg cursor-pointer text-lg hover:bg-transparent transition">
        Sign Up
      </button>
    </div>
  </div>
);

export default CreateAccountCta;
