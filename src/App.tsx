import "./App.css";
import { Cards, DataTable } from "./components";
import { Measurement } from "./lib/types";
import { columns } from "./components/shared/measurements-table/columns";
import { useState } from "react";

const testValues: Measurement[] = [
  {
    id: "ST-1",
    measurement_type: "Temperatura",
    measurement: "Temperatura em 25ºC",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SVZ-1",
    measurement_type: "Vazão",
    measurement: "Vazão de entrada é 300 m³/h",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
  {
    id: "SV-1",
    measurement_type: "volume",
    measurement: "Volume de água baixo",
    timestamp: Date.now(),
  },
];
function App() {
  const [measurements, setMeasurements] = useState(testValues);
  return (
    <>
      <div className="header border-b"></div>
      <main className="main">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dashboard
        </h1>

        <Cards />
        <DataTable data={measurements} columns={columns} />
      </main>
    </>
  );
}

export default App;
