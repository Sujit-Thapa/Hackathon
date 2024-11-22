// components/Layout.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./page.module.css";
import { FaWarehouse, FaCloudSun, FaSeedling } from "react-icons/fa";
import { NavBar } from "../components/navbar/navBar";
import { SideNav } from "../components/sideNav/sideNav";
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <header>
      <NavBar />
    </header>
    <div className="flex ">
      <SideNav />
      <main>{children}</main>
    </div>
    {/* Footer */}
    <div>
      <footer className={styles.footer}>
        © 2024 KishanSewa. All rights reserved.
      </footer>
    </div>
  </>
);

export default Layout;
