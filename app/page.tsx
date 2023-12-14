import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import React from "react";

const Home = () => {
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
    </div>
  );
};

export default Home;
 