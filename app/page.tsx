"use client";

import CarList from "@/components/Home/CarsList";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import React, { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    getCarList_();
  }, []);

  const [carsList, setCarsList] = useState<any>([]);
  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption />
      <CarList carsList={carsList} />
    </div>
  );
};

export default Home;
