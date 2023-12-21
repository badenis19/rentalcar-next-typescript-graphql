import React, { useEffect, useState } from "react";

// type CarsFiltersOptionProps = {};

const CarsFiltersOption = ({ carsList, setBrand, orderCarList }: any) => {
  const [brandList, setBrandList] = useState<any>();
  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList?.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalogue</h2>
        <h2>Explore our superb range of cars</h2>
      </div>
      <div className="flex gap-5">
        <select
          onChange={(e) => orderCarList(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          //   onChange={(e) => filterCarList_(e.target.value)}
          className="select select-bordered md:block max-w-xs hidden"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Manufacturer
          </option>
          {brandList &&
            brandList?.map((brand: string, index: number) => {
              return <option key={index}>{brand}</option>;
            })}
        </select>
      </div>
    </div>
  );
};

export default CarsFiltersOption;
