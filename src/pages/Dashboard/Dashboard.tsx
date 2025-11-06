import { useState, type JSX } from "react";
import Button from "@/components/buttons/Buttons";
import { useEffect, useRef } from "react";
import './Dashboard.css'
import { GridStack, type GridStackOptions } from "gridstack";
import { TabsContainer } from "@/components/tabs/TabContainer";

export default function Dashboard() {
  const[loading, setLoading] = useState(false)
  const[count, setCount] = useState(0)
  const[activeTab,setActiveTab] = useState('principal')
  const handleClickLogin = async () => {
      setCount(count + 1) 
  };

  const tabs = [
    {
      label: "Mis Dashboards",
      content: (
        <div className="bg-[var(--surface)] p4 rounded-lg shadow-md border border-[var(--border-subtle)] mt">
          <h2 className="text-xl font-semibold">
            Mis Dashboards
          </h2>
          <p className="text-[var(--text-secondary)]">
            Aquí verás tus dashboards personalizados 👇
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[300px]">
            {/* <GristackContainer/> */}
          </div>
        </div>
      ),
    },
    {
      label: "Personalizar",
      content: (
        <div className="bg-[var(--surface)] p-6 rounded-lg shadow-md border border-[var(--border-subtle)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
            Personalización de Widgets
          </h2>
          <p className="text-[var(--text-secondary)]">
            Ajusta tus widgets según tus preferencias.
          </p>
          <button className="mt-4 px-4 py-2 rounded bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--text-primary)] font-medium transition">
            Guardar Cambios
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="containers items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb">Panel principal</h1>
      {/* Aquí usamos el TabsContainer */}
      <TabsContainer tabs={tabs}/>
    </div>
  );
}


function GristackContainer(): JSX.Element {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const grid = GridStack.init(
      {
        column: 12,
        float: true,
        animate: true,
      },
      gridRef.current
    );

    grid.load([
      { x: 0, y: 0, w: 4, h: 2, content: "<div class='grid-item'>Widget 1</div>" },
      { x: 4, y: 0, w: 4, h: 2, content: "<div class='grid-item'>Widget 2</div>" },
      { x: 8, y: 0, w: 4, h: 2, content: "<div class='grid-item'>Widget 3</div>" },
    ]);

    return () => {
      grid.destroy(); // ✅ ahora TS ve que el retorno es void
    };
  }, []);

  return <div ref={gridRef} className="grid-stack"></div>;
}