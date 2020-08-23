import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Products = () => {
  const [prod, setprod] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://invoices-ng.herokuapp.com/api/products"
      );
      await setprod(res.data);
      //   console.log(res.data);
      //   console.log(prod);
    };
    getProducts();
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {prod ? (
          <tbody>
            {prod.map((products) => (
              <tr>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.price}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody></tbody>
        )}
      </Table>
    </div>
  );
};
export default Products;
