import { FaWarehouse, FaCloudSun, FaBook, FaSeedling } from "react-icons/fa6";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KishanSewa</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <FaWarehouse size={30} />
                <a href="/">Inventory</a>
              </li>
              <li>
                <FaCloudSun size={30} />
                <a href="/weather">Weather</a>
              </li>
              <li>
                <FaBook size={30} />
                <a href="/blog">Blog</a>
              </li>
              <li>
                <FaSeedling size={30} />
                <a href="/crop-rotation">Crop Rotation</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
