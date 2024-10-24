import "./App.css";
import { Cards, DataTable } from "./components";
import { MeasurementsProvider } from "./lib/types";
import { columns } from "./components/shared/measurements-table/columns";
import { useEffect, useMemo, useState } from "react";
import { getRawMeasurements } from "./utils/services/measurements-services";
import { transformData } from "./utils/utils";

function App() {
  const [rawMeasurements, setRawMeasurements] = useState([]);
  const measurements = useMemo(
    () => transformData(rawMeasurements),
    [rawMeasurements],
  );

  useEffect(() => {
    getRawMeasurements().then((data) => setRawMeasurements(data));
  }, []);

  return (
    <>
      <div className="header border-b"></div>
      <main className="main">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dashboard
        </h1>

        <MeasurementsProvider value={measurements}>
          <Cards />
        </MeasurementsProvider>
        <DataTable data={measurements} columns={columns} />
      </main>
    </>
  );
}

export default App;
