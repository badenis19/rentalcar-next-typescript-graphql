import React from "react";
import CarCard from "./CarCard";
import Form from "./Form";

const CarBookingModal = ({ car }: any) => {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2 ">
        <h3 className="text-[30px] font-light text-gray-400">
          Rent a Car Now!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5">
        <div>
          <CarCard
            name={car?.name}
            price={car?.price}
            carAvg={car?.carAvg}
            image={car?.image}
            seats={car?.seats}
            carType={car?.carType}
            inForm={false}
          />
        </div>
        <div className="">
          <Form car={car} />
        </div>
      </div>
    </form>
  );
};

export default CarBookingModal;
