import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const Customers = () => {
  const [cust, setcust] = useState(null);
  useEffect(() => {
    const getCustomer = async () => {
      const res = await axios.get(
        "https://invoices-ng.herokuapp.com/api/customers"
      );
      await setcust(res.data);
      //   console.log(res.data);
      //   console.log(cust);
    };
    getCustomer();
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        {cust ? (
          <tbody>
            {cust.map((customers) => (
              <tr>
                <td>{customers.id}</td>
                <td>{customers.name}</td>
                <td>{customers.address}</td>
                <td>{customers.phone}</td>
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
export default Customers;
