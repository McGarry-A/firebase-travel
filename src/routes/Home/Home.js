import React from "react";
import "firebase/compat/auth";
import Carousel from "../../components/carousel/Carousel";
import Hero from "../../components/hero/Hero";
import data from "../../data";
import SubHero from "../../components/subHero/subHero";
import CreateAccountCta from "../../components/createAccountCTA/CreateAccountCta";

const Home = () => {
        return (
          <div className="lg:max-w-[1920px] lg:mx-auto bg-zinc-800 text-white pb-20">
            <Hero />
            <Carousel title="Featured Recipies" data={data} />
            <SubHero />
            <Carousel title="Chefs Spotlight" data={data} isChef={true} />
            <CreateAccountCta />
          </div>
        )
}

export default Home;