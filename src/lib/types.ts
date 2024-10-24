import { createContext } from "react";

export interface Measurement {
  id: string;
  measurement: string;
  measurement_type: string;
  timestamp: Date;
}

export interface FlowMeasurement {
  id: number;
  flow_rate: string;
  measurement_date: string;
}

export interface TemperaturesMeasurement {
  id: number;
  temperature_value: string;
  measurement_date: string;
}

export interface VolumMeasurement {
  id: number;
  volume_value: string;
  measurement_date: string;
}

const MeasurementsContext = createContext<Measurement[]>([]);

const MeasurementsProvider = MeasurementsContext.Provider;

export { MeasurementsContext, MeasurementsProvider };
