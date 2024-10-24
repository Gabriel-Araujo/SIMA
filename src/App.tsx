import "./App.css";
import { Cards, DataTable } from "./components";
import { Measurement, MeasurementsProvider } from "./lib/types";
import { columns } from "./components/shared/measurements-table/columns";
import { useEffect, useMemo, useState } from "react";
import { getMeasurements } from "./utils/services/measurements-services";

function App() {
  const [measurements, setMeasurements] = useState<Measurement[]>([]);

  useEffect(() => {
    getMeasurements().then((data) => setMeasurements(data));
  }, []);

  return (
    <>
      <div className="header border-b"></div>
      <main className="main">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dashboard
        </h1>

        <MeasurementsProvider
          value={useMemo(() => [measurements, setMeasurements], [measurements])}
        >
          <Cards />
        </MeasurementsProvider>
        <DataTable data={measurements} columns={columns} />
      </main>
    </>
  );
}

export default App;
