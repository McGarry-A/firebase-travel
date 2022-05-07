import {SiCodechef} from "react-icons/si"
const SubHero = () => {
  return (
    <div className="my-6 p-6">
        <SiCodechef size="4rem" className="mx-auto mb-2"/>
      <div>
        <h1 className="text-2xl font-bold text-center leading-normal tracking-wide">
          Learn Incredible Dishes from{" "}
          <span className="underline decoration-violet-600 decoration-wavy">
            Michelin Star 
          </span> Chefs
          
        </h1>
        <h2 className="text-md text-gray-500 mt-1 text-center tracking-wide w-full">
          Follow the best in the business as they perfect to-die-for dishes and
          replicate the magic at home.
        </h2>
      </div>
    </div>
  );
};

export default SubHero;
