import React, { use } from "react";
import styles from "./page.module.css";
import { FaWarehouse, FaCloudSun, FaSeedling } from "react-icons/fa";
import Weather from "../components/Weather/weather";
import { TranscationChart } from "../components/trancation-chart/transcationChart";

const Page = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        {/* Weather Section */}
        <div className="flex gap-5 w-full">
          <Weather />
          <div className="border-2 rounded-md bg-opacity-20 backdrop-blur-md shadow-lg">
            <TranscationChart />
          </div>
        </div>
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
      </div>
    </>
  );
};

export default Page;
