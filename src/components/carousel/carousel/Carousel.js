import { useState, useEffect } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

import data from "../../carousel";

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [outOfCards, setOutOfCards] = useState(false);

  useEffect(() => {
    currentCard > data.length - 1 ? setOutOfCards(true) : setOutOfCards(false);
  }, [currentCard]);

  const handleClick = (boolean) => {
    if (boolean === true) {
      setCurrentCard(currentCard + 1);
    } else if (boolean === false) {
      setCurrentCard(currentCard + 1);
    }
  };

  const renderOutOfCards = () => {
    if (outOfCards) {
      return (
        <div className="block max-w-xl min-h-48 mx-auto text-center relative h-24">
          No More Cards!
        </div>
      );
    }
  };

  const renderCard = (el, index) => {
      return (
        <div className="rounded overflow-hidden shadow-lg min-w-full mx-1" key={index}>
          <div className="">
            <img src={el.img} alt="recipie" className="w-full" />
          </div>
          <div className="mx-2">
            <h3 className="text-lg font-bold my-1">{el.recipie}</h3>
            <p className="my-1 opacity-50">{el.name}</p>
            <p className="text-gray-700 text-base">{el.description}</p>
            <p className="my-4 opacity-30 text-sm text-right">{el.date}</p>
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-3">Bookmark</button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Instructions</button>
            </div>
          </div>
        </div>
      );
  }

  const renderCards = () => {
    if (!outOfCards) {
      return (
        <div className={`flex whitespace-nowrap flex-nowrap -translate-x-[${currentCard * 100}%] transition`}>
          {data.map(renderCard)}
        </div>
      );
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="overflow-hidden p-2">
        { renderCards() }
        { renderOutOfCards() }
      </div>
      <div className="flex justify-center mt-3">
        <FaRegThumbsUp
          size="3em"
          color="green"
          className="mx-3 cursor-pointer hover:scale-110 transition"
          onClick={() => handleClick(true)}
        />
        <FaRegThumbsDown
          size="3em"
          color="red"
          className="mx-3 cursor-pointer hover:scale-110 transition"
          onClick={() => handleClick(false)}
        />
      </div>
    </div>
  );
};

export default Carousel;
