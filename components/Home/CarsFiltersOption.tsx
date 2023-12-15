import React from "react";

type Props = {};

const CarsFiltersOption = (props: Props) => {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalogue</h2>
        <h2>Explore our superb range of cars</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-bordered md:block max-w-xs hidden">
          <option disabled selected>
            Manufacturer
          </option>
          <option>Audi</option>
          <option>BMW</option>
          <option>Ford</option>
          <option>Ferrari</option>
        </select>
      </div>
    </div>
  );
};

export default CarsFiltersOption;
