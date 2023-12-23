// Methods to get all the car list

import request, { gql } from "graphql-request";

const urlMaster =
  "https://api-eu-west-2.hygraph.com/v2/clq6f8gfn43dn01uo4uau9o9x/master";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        image {
          url
        }
        seats
        carType
        carBrand
      }
    }
  `;

  const result = await request(urlMaster, query);
  return result;
};

export const getAddressList = async () => {
  const query = gql`
    query MyQuery {
      storesLocations {
        address
      }
    }
  `;

  const result = await request(urlMaster, query);
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data: {
          username: "`+formValue.userName+`",
          # pickUpTime: "`+formValue.pickUpDate+`",
          # dropOffTime: "`+formValue.pickUpTime+`",
          # pickUpDate: "`+formValue.dropOffDate+`",
          # dropOffDate: "`+formValue.dropOffTime+`",
          # contactNumber: "`+formValue.contactNumber+`",
          # carId: { connect: { id: "`+formValue.carId+`" } }
        }
      ) {
        id
      }
    }
  `;

  const result = await request(urlMaster, mutationQuery);
  return result;
};
