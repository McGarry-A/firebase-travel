const Card = ({ el }) => (
  <div className="overflow-hidden max-w-sm rounded-lg bg-zinc-700 border-slate-500 mx-auto">
    <a href="#">
      <img className="rounded-t-lg" src={el.image} alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {el.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-400">{el.desc}</p>
      <a
        href="#"
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-violet-800 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300"
      >
        Read more
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
);

export default Card;
