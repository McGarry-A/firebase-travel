import {SiCodechef} from "react-icons/si"
const SubHero = () => {
  return (
    <div className="my-4 p-6">
        <SiCodechef size="4rem" className="mx-auto mb-2"/>
      <div>
        <h2 className="">
          Learn Incredible Dishes from{" "}
          <span className="text_isWavy">
            Michelin Star 
          </span> Chefs
        </h2>
        <p className="text-gray-500 mt-1 w-full text-center text-lg">
          Follow the best in the business as they perfect to-die-for dishes and
          replicate the magic at home.
        </p>
      </div>
    </div>
  );
};

export default SubHero;
