"use client";

import Container from "../components/Container";
import CartClient from "./CartClient";

export default function page() {
  return (
    <div>
      <Container>
        <CartClient />{" "}
      </Container>
    </div>
  );
}
