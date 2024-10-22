import { createContext } from "react";

export interface Measurement {
  id: string;
  measurement: string;
  measurement_type: string;
  timestamp: number;
}

export function empty_measuremnt(): Measurement {
  return {
    id: "0",
    measurement: "",
    measurement_type: "",
    timestamp: Date.now(),
  };
}

const MeasurementsContext = createContext<
  [Measurement[], React.Dispatch<React.SetStateAction<Measurement[]>>]
>([[], () => {}]);

const MeasurementsProvider = MeasurementsContext.Provider;

export { MeasurementsContext, MeasurementsProvider };
