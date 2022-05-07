const ChefCard = () => (
  <div className="max-w-sm mx-auto rounded-lg border bg-zinc-700 border-slate-500 shadow-md">
    <div className="flex justify-end px-4 pt-4"></div>
    <div className="flex flex-col items-center pb-10">
      <img
        className="mb-3 w-20 h-20 rounded-full shadow-lg object-cover"
        src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Gordon Ramsey
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Goated Chef
      </span>
      <div className="flex mt-4 space-x-3 lg:mt-6">
        <a
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-transparent border-2 border-zinc-200 rounded-lg focus:ring-4 focus:outline-none ml-4"
        >
          See Recipies
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default ChefCard;
