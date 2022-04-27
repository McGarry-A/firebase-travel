import Card from "../Card/Card";

import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { VscRefresh } from "react-icons/vsc";
import { useEffect, useState } from "react";

import { meals } from "./meals";

const CardContainer = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  useEffect(() => {
    const checkOutOfCards = () => {
      if (currentCardIndex > meals.length - 1|| currentCardIndex < 0) {
        setCurrentCardIndex(0);
      }
    };

    checkOutOfCards();
  }, [currentCardIndex]);

  const handleThumbsUp = () => {
    const newIndex = currentCardIndex + 1;
    setCurrentCardIndex(newIndex);
  };

  const handleThumbsDown = () => {
    const newIndex = currentCardIndex - 1;
    setCurrentCardIndex(newIndex);
  };

  const renderThumbsUp = () => (
    <div
      className="p-4 rounded-full border-4 border-green-500 w-min m-3 cursor-pointer"
      onClick={handleThumbsUp}
    >
      <GoThumbsup color="green" size="2em" />
    </div>
  );

  const renderThumbsDown = () => (
    <div
      className="p-4 rounded-full border-4 border-red-500 w-min m-3 cursor-pointer"
      onClick={handleThumbsDown}
    >
      <GoThumbsdown color="red" size="2em" />
    </div>
  );

  const renderRefresh = () => (
    <div className="p-4 rounded-full border-4 border-yellow-500 w-min m-3 cursor-pointer align-top">
      <VscRefresh color="gold" size="2em" />
    </div>
  );

  return (
    <figure className="h-50">
      <Card currentCardIndex={currentCardIndex} meals={meals} />
      <figcaption className="flex justify-center">
        {renderThumbsDown()}
        {renderRefresh()}
        {renderThumbsUp()}
      </figcaption>
    </figure>
  );
};

export default CardContainer;
