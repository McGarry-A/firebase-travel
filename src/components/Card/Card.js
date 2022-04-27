const Card = ({currentCardIndex, meals}) => (
    <div className="border-2 shadow-sm max-w-md mx-auto my-2 bg-gray-800 border-gray-700 p-5">
      <h2 className="text-white font-bold text-center font-sans text-xl">{meals[currentCardIndex] && meals[currentCardIndex].name}</h2>
    </div>
  );
export default Card;
