'use client'

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import React, { useEffect } from "react";

const Home = () => {
  const getCarList_ = async () => {
    const result = await getCarsList();
    console.log(result);
  };

  useEffect(() => {
    getCarList_();
  }, []);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption />
    </div>
  );
};

export default Home;
