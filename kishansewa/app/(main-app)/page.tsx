import React, { use } from "react";
import styles from "./page.module.css";
import { FaWarehouse, FaCloudSun, FaSeedling } from "react-icons/fa";
import Weather from "../components/Weather/weather";

const Page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>KishanSewa Dashboard</h1>
        <div className="button"></div>
        <div className={styles.cardContainer}>
          {/* Inventory Card */}
          <div className={styles.card}>
            <FaWarehouse className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>Inventory Management</h2>
            <p className={styles.cardDescription}>
              Manage your inventory of seeds, fertilizers, and more efficiently.
            </p>
          </div>
          {/* Weather Card */}
          <div className={styles.card}>
            <FaCloudSun className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>Weather Forecast</h2>
            <p className={styles.cardDescription}>
              Get real-time weather updates and plan your farming activities.
            </p>
          </div>
          {/* Crop Rotation Card */}
          <div className={styles.card}>
            <FaSeedling className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>Crop Rotation</h2>
            <p className={styles.cardDescription}>
              Plan optimal crop rotations for improved soil health and yields.
            </p>
          </div>
        </div>
        {/* Weather Section */}
        <Weather />
      </div>
    </>
  );
};

export default Page;
