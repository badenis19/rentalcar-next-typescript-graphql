"use client";

import CarCard from "./CarCard";

type carListProps = {
  carsList: any;
};

const CarsList = ({ carsList }: carListProps) => {
  return (
    <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
      {carsList?.map((car: any) => (
        <CarCard
          name={car?.name}
          price={car?.price}
          carAvg={car?.carAvg}
          image={car?.image}
          seats={car?.seats}
          carType={car?.carType}
        />
      ))}
    </div>
  );
};

export default CarsList;
