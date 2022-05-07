const RecipieCard = ({ el }) => (
  <div className="card">
    <img className="" src={el.image} alt="" />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {el.title}
      </h5>
      <p className="mb-3 text-gray-400">{el.desc}</p>
      <div className="space-x-2">
        <button className="btn btn_alt text-sm px-4">Bookmark Recipie</button>
        <button className="btn btn_alt inline-flex px-4 text-sm items-center">
          Read more
          <svg
            className="ml-2 w-4 h-4"
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
        </button>
      </div>
    </div>
  </div>
);

export default RecipieCard;
