import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Invoice = () => {
  return (
    <div>
      <Button variant="primary" className="mt-5">
        <Link style={{ color: "#fff" }} to="/create">
          Create Invoice
        </Link>
      </Button>
    </div>
  );
};
export default Invoice;
