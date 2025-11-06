import React,{useState} from "react"
import { Menu, Transition } from "@headlessui/react";
import './Header.css'
import { FaBell, FaChevronDown, FaUser, FaSignOutAlt, FaBars, FaAngleDown, FaSearch, FaTimes } from "react-icons/fa";
import type {HeaderProps} from "./HeaderType";

export default function Header({ onToggleSidebar, onLogout, username = "Usuario" }: HeaderProps) {
  // estado para mostrar dropdown de usuario
  const [showUserMenu, setShowUserMenu] = useState(false);
  // estado para mostrar cuadro de búsqueda (si quieres mantenerlo)
  const [showSearch, setShowSearch] = useState(false);
  // notificaciones (a futuro vendrán del backend)
  const [notifications] = useState([
    { id: 1, text: "Nueva actualización disponible 🚀" },
    { id: 2, text: "Tu sesión expirará pronto ⏳" },
  ]);

  return (
    <header id="page-header" className="w-full text-white shadow flex items-center justify-between px-6 h-16">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        {/* Toggle Sidebar */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-full hover:bg-yellow-500 transition btn-rounded text-xs"
        >
          <FaBars size={14} />
        </button>

        {/* Puedes colocar el nombre de la app o logo */}
        <h1 className="text-lg font-bold hidden sm:block">
          Sistema TEST Continua
        </h1>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4 relative">
        {/* 🔍 Search toggle */}
        {showSearch ? (
          <div className="flex items-center bg-white text-black rounded-full px-3 py-1">
            <FaSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar..."
              className="outline-none border-none w-32 text-sm"
            />
            <button onClick={() => setShowSearch(false)} className="ml-2">
              <FaTimes />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <FaSearch size={16} />
          </button>
        )}

        {/* 🔔 Notificaciones */}
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-yellow-500 transition relative">
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1 rounded-full hover:bg-blue-700">
                {notifications.length}
              </span>
            )}
            <FaBell size={16} />
          </button>

          {/* Dropdown de notificaciones */}
          {notifications.length > 0 && (
            <ul className="absolute right-0 mt-2 bg-white text-black w-64 rounded shadow-lg overflow-hidden">
              {notifications.map((n) => (
                <li
                  key={n.id}
                  className="px-3 py-2 text-sm border-b border-gray-200 hover:bg-gray-100"
                >
                  {n.text}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 👤 User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu((prev) => !prev)}
            className="flex items-center gap-2 p-2 rounded-full hover:bg-yellow-500 transition"
          >
            <span className="text-sm font-medium">{username}</span>
            <FaAngleDown />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 bg-white text-black w-48 rounded shadow-lg overflow-hidden">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                onClick={() => alert("Ir a perfil")}
              >
                <FaUser /> Perfil
              </button>
              <div className="border-t"></div>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center gap-2"
                onClick={onLogout}
              >
                <FaSignOutAlt /> Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}