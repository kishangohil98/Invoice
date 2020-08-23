import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
const CreateInvoice = () => {
  const [customer, setcustomer] = useState(null);
  const [products, setproducts] = useState(null);

  const [slctcustomer, setslctcustomer] = useState("");
  const [slctproduct, setslctproduct] = useState(null);
  const [quantity, setquantity] = useState(1);
  const [price, setprice] = useState(0);

  const pricesimple = slctproduct * quantity;

  useEffect(() => {
    setprice(slctproduct * quantity);
  }, [slctproduct, quantity]);

  useEffect(() => {
    const getCustomer = async () => {
      const res = await axios.get(
        "https://invoices-ng.herokuapp.com/api/customers"
      );
      await setcustomer(res.data);
      // console.log(res.data);
      // console.log(cust);
    };
    const getProduct = async () => {
      const resp = await axios.get(
        "https://invoices-ng.herokuapp.com/api/products"
      );
      await setproducts(resp.data);
      // console.log(res.data);
      // console.log(cust);
    };

    getCustomer();
    getProduct();
  }, [slctproduct, quantity, price]);

  const productSelect = (e) => {};

  // const calculatePrice = () => {
  //   console.log("call inner");
  //   setprice(slctproduct * quantity);
  // };
  return (
    <div>
      <h1>Invoice Create</h1>
      {customer && products ? (
        <Form>
          <Form.Row>
            <Form.Group>
              <Form.Label>Select Customers</Form.Label>
              <Form.Control
                as="select"
                name="customer"
                onChange={(e) => {
                  setslctcustomer(e.currentTarget.value);
                }}>
                <option>Choose..</option>
                {customer.map((c) => (
                  <option value={c.name}>{c.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Select Product</Form.Label>
            <Form.Control
              as="select"
              name="product"
              onChange={(e) => {
                setslctproduct(e.currentTarget.value);
              }}>
              <option>Choose..</option>

              {products.map((p) => (
                <option value={p.price}>{p.name}</option>
              ))}
            </Form.Control>

            <Form.Label
              className="my-1 mr-2"
              htmlFor="inlineFormCustomSelectPref">
              Quantity
            </Form.Label>
            <Form.Control
              as="select"
              name="quantity"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              defaultValue={quantity}
              onChange={(e) => {
                setquantity(e.currentTarget.value);
              }}
              custom>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Control>
          </Form.Group>

          <h5 className="mt-5">Price: $ {price}</h5>
          <Form.Row></Form.Row>
        </Form>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default CreateInvoice;
