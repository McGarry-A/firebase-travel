import { useState, useEffect } from "react";
import data from "../../carousel";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
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

  const renderCards = () => {
    if (!outOfCards) {
      return (
        <div className="flex justify-center">
          {data.map((el, index) => {
            const card = "max-w-sm rounded overflow-hidden shadow-lg md:min-w-sm";

            const currentCardClass = "";
            const nextCardClass = "";
            const hiddenCardClass = "";

            const nextCard = currentCard + 1;

            let classNames = "";

            switch (index) {
              case currentCard:
                classNames = `${card + currentCardClass}`;
                break;
              case nextCard:
                classNames = `${card + nextCardClass}`;
                break;
              default:
                classNames = `${card + hiddenCardClass}`;
                break;
            }

            return (
              <div className={`${classNames} m-5`} key={index}>
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
          })}
        </div>
      );
    }
  };

  return (
    <div className="">
      <div className="">
        {renderCards()}
        {renderOutOfCards()}
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
