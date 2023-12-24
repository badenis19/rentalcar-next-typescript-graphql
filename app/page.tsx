"use client";

import CarList from "@/components/Home/CarsList";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import React, { useEffect, useState } from "react";
import ToastMsg from "@/components/ToastMsg";
import { BookingCreatedFlagContext } from "@/context/BookingCreatedFlagContext";

const Home = () => {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOriginalList, setCarsOriginalList] = useState<any>([]);
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);
  // const [brand, setBrand] = useState<string>("");

  useEffect(() => {
    getCarList_();
  }, []);

  const filterCarList_ = (brand: string) => {
    const filterList = carsOriginalList.filter((item: any) => {
      return item.carBrand == brand;
    });
    setCarsList(filterList);
  };

  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOriginalList(result?.carLists);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carsOriginalList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  useEffect(() => {
    if (showToastMessage) {
      setTimeout(function () {
        setShowToastMessage(false);
      }, 4000);
    }
  }, [showToastMessage]);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookingCreatedFlagContext.Provider
        value={{ showToastMessage, setShowToastMessage }}
      >
        <Hero />
        <SearchInput />
        <CarsFiltersOption
          carsList={carsOriginalList}
          setBrand={(value: string) => filterCarList_(value)}
          orderCarList={(value: string) => orderCarList(value)}
        />
        <CarList carsList={carsList} />
        {showToastMessage ? (
          <ToastMsg msg="Car successfully booked! Thank you. Come again!" />
        ) : null}
      </BookingCreatedFlagContext.Provider>
    </div>
  );
};

export default Home;
