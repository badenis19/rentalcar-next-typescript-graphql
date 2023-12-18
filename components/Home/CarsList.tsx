"use client";

import CarBookingModal from "./CarBookingModal";
import CarCard from "./CarCard";

type carListProps = {
  carsList: any;
};

const CarsList = ({ carsList }: carListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {carsList?.map((car: any, index: number) => (
        // <div key={index} onClick={() => console.log('first')}>
        <div key={index} onClick={() => (window as any).my_modal_4.showModal()}>
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
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        // onClick={() =>}
      >
        open modal
      </button>
      <dialog id="my_modal_4" className="modal">
        <CarBookingModal />
      </dialog>
    </div>
  );
};

export default CarsList;
