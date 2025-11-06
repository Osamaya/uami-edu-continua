
// 🔹 Definimos el tipo para las props
export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface TabsContainerProps {
  tabs: TabItem[];
}