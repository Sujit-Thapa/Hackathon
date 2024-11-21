import React from "react";
import styles from "./page.module.css";
import { FaWarehouse, FaCloudSun, FaSeedling } from "react-icons/fa";
import { SignIn, UserButton } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import SignInPage from "@/app/utls/signIn";

const Page = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.heading}>KishanSewa </h1>
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
        <div className={styles.weatherSection}>
          <h2 className={styles.weatherTitle}>Weather Updates</h2>
          <p className={styles.weatherData}>
            Sunny, 25°C | Wind: 10km/h | Humidity: 60%
          </p>
        </div>
        {/* Footer */}
        <footer className={styles.footer}>
          © 2024 KishanSewa. All rights reserved.
        </footer>
      </div>
      <div>
        {/* <SignInPage />
         */}
        <SignIn></SignIn>
      </div>
    </div>
  );
};

export default Page;
