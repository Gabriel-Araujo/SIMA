import { Measurement } from "@/lib/types";
import axios from "axios";

const BASE_URL = "https://devga.pythonanywhere.com";

async function getMeasurements() {
  const path = BASE_URL + "/get/all";

  try {
    return await axios
      .get(path, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        const result: Measurement[] = [];

        data.temperatures.forEach((item: any) => {
          result.push({
            id: "ST-1",
            measurement_type: "Temperatura",
            measurement: `Temperatura em ${item.temperature_value}ºC`,
            timestamp: item.measurement_date,
          });
        });

        data.flows.forEach((item: any) => {
          result.push({
            id: "SVZ-1",
            measurement_type: "Vazão",
            measurement: `Vazão em ${item.flow_rate} L/min`,
            timestamp: item.measurement_date,
          });
        });

        data.volumes.forEach((item: any) => {
          result.push({
            id: "SV-1",
            measurement_type: "Volume",
            measurement:
              item.volume_value >= 1 ? "Volume Alto" : "Volume baixo",
            timestamp: item.measurement_date,
          });
        });

        return result;
      });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { getMeasurements };
