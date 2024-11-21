import React from "react";
import Inventory from "./components/Inventory"; 
import { FaWarehouse } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <h1>Welcome to KishanSewa</h1>
      <h2>Inventory Management System</h2>
      <Inventory />
    </div>
  );
}
