// Methods to get all the car list

import request, { gql } from "graphql-request";

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

  const result = await request(
    "https://api-eu-west-2.hygraph.com/v2/clq6f8gfn43dn01uo4uau9o9x/master",
    query
  );
  return result;
};
