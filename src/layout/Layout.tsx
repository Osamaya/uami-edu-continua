import React, { useState } from "react";
import Header from "@/components/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleLogout = () => {
        console.log("Cerrando sesión...");
    };

    return (
        <div className="flex min-h-screen overflow-hidden bg-gray-100 w-full">
            {/* SIDEBAR */}
            <aside
                className={`${
                isSidebarOpen ? "w-64" : "w-0"
                } bg-gray-900 text-white transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden`}
            >
                <div className="h-full flex flex-col">
                    <div className="p-4 font-bold text-lg border-b border-gray-700">
                        Xolotl Dashboard
                    </div>
                    <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                        <a
                        href="#"
                        className="block py-2 px-3 rounded hover:bg-gray-700 transition"
                        >
                        Dashboard
                        </a>
                        <a
                        href="#"
                        className="block py-2 px-3 rounded hover:bg-gray-700 transition"
                        >
                        Usuarios
                        </a>
                        <a
                        href="#"
                        className="block py-2 px-3 rounded hover:bg-gray-700 transition"
                        >
                        Configuración
                        </a>
                    </nav>
                    <div className="p-4 border-t border-gray-700 text-sm">
                        © {new Date().getFullYear()} Xolotl
                    </div>
                </div>
            </aside>

            {/* CONTENEDOR PRINCIPAL */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* HEADER */}
                <header className="sticky top-0 z-20 shadow-md">
                <Header
                    onToggleSidebar={handleToggleSidebar}
                    onLogout={handleLogout}
                    username="Juan Pérez"
                />
                </header>

                {/* CONTENIDO */}
                <main className="flex-1 overflow-y-auto w-full bg-gray-50 p-4">
                    <div className="mx-auto">
                        {children}
                    </div>
                </main>
                {/* Footer */}
                <footer className="bg-blue-700 text-white text-center py-3">
                    © {new Date().getFullYear()} Mi App - Todos los derechos reservados
                </footer>
            </div>
            
        </div>
        
    );
}
