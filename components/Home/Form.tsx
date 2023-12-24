import { BookingCreatedFlagContext } from "@/context/BookingCreatedFlagContext";
import { createBooking, getAddressList } from "@/services";
import React, { useContext, useEffect, useState } from "react";

const Form = ({ car }: any) => {
  const [addressList, setAddressList] = useState<any>([]);
  const { showToastMessage, setShowToastMessage } = useContext(
    BookingCreatedFlagContext
  );

  const [formValue, setFormValue] = useState<any>({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "Kweku Agyapong",
    carId: "",
  });

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: { connect: { id: car.id } },
      });
    }
  }, []);

  const today: any = new Date();

  useEffect(() => {
    getAddressList_();
  }, []);

  const getAddressList_ = async () => {
    const result: any = await getAddressList();
    setAddressList(result.storesLocations);
  };

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    setShowToastMessage(true);
    console.log(formValue);
    // const resp = await createBooking(formValue);
    // console.log(resp);
    // if (resp) {
    // }
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select  select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            PickUp Location?
          </option>
          {addressList?.map((store: any, index: number) => {
            return <option key={index}>{store.address}</option>;
          })}
        </select>
      </div>

      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            // min={today}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name="pickUpDate"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            // min={today}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name="dropOffDate"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex gap-5 ">
          <div className="flex flex-col w-full mb-5">
            <label className="text-gray-400">Pick Up Time</label>
            <input
              type="time"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg"
              name="pickUpTime"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full mb-5">
            <label className="text-gray-400">Drop Off Time</label>
            <input
              type="time"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg"
              name="dropOffTime"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-lg"
          name="contactNumber"
          onChange={handleChange}
        />
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          onClick={() => handleSubmit()}
          className="btn bg-purple-500 text-white hover:bg-purple-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
