import { getAddressList } from "@/services";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [addressList, setAddressList] = useState<any>([]);

  useEffect(() => {
    getAddressList_();
  }, []);

  const getAddressList_ = async () => {
    const result: any = await getAddressList();
    setAddressList(result.storesLocations);
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select  select-bordered w-full max-w-lg"
          name="location"
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
            min="Wed Dec 20 2023 14:33:36 GMT+0000 (Greenwich Mean Time)"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name="pickUpDate"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name="dropOffDate"
          />
        </div>
        <div className="flex gap-5 ">
          <div className="flex flex-col w-full mb-5">
            <label className="text-gray-400">Pick Up Time</label>
            <input
              type="time"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg"
              name="pickUpTime"
            />
          </div>
          <div className="flex flex-col w-full mb-5">
            <label className="text-gray-400">Drop Off Time</label>
            <input
              type="time"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg"
              name="dropOffTime"
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
        />
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button className="btn bg-blue-500 text-white hover:bg-blue-800">
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
  