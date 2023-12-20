"use client";

import { useState } from "react";
import CarBookingModal from "./CarBookingModal";
import CarCard from "./CarCard";

type carListProps = {
  carsList: any;
};

const CarsList = ({ carsList }: carListProps) => {
  //   const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<any>([]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {carsList?.map((car: any, index: number) => (
        <div
          key={index}
          onClick={() => {
            (window as any).my_modal_4.showModal();
            setSelectedCar(car);
          }}
        >
          <CarCard
            name={car?.name}
            price={car?.price}
            carAvg={car?.carAvg}
            image={car?.image}
            seats={car?.seats}
            carType={car?.carType}
          />
        </div>
      ))}

      <button className="btn">open modal</button>
      <dialog id="my_modal_4" className="modal">
        <CarBookingModal car={selectedCar} />
      </dialog>
    </div>
  );
};

export default CarsList;
