'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaWallet, FaChartLine, FaList, FaCog, FaBell, FaUser } from "react-icons/fa";

interface MenuItem {
  id: string;
  label: string;
  icon: JSX.Element;
  path: string;
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", icon: <FaHome />, path: "/" },
    { id: "savings", label: "Savings", icon: <FaWallet />, path: "/savings" },
    { id: "investments", label: "Investments", icon: <FaChartLine />, path: "/investments" },
    { id: "transactions", label: "Transactions", icon: <FaList />, path: "/transactions" },
    { id: "settings", label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-200 text-gray-700 p-4">
      <h2 className="text-xl font-bold mb-6">Fintech App</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.path} className={`flex items-center gap-3 p-3 cursor-pointer rounded ${pathname === item.path ? "bg-gray-300" : "hover:bg-gray-100"}`}>
              {item.icon} {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};



const Header: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-600 shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-700 cursor-pointer" />
        <Link href={'/settings'}>
        <FaUser className="text-gray-700 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="hr w-full bg-white text-gray-600 shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center justify-center gap-4">
      <p>Terms</p>
      <p>Privacy</p>
      </div>
    </div>
  );
};

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 bg-white text-gray-900 p-6">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
