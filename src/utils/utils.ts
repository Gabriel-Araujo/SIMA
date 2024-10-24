import {
  Measurement,
  FlowMeasurement,
  TemperaturesMeasurement,
  VolumMeasurement,
} from "@/lib/types";

function transformData(response: any): Measurement[] {
  const measurements: Measurement[] = [];

  try {
    response.flows?.forEach((item: FlowMeasurement) => {
      measurements.push({
        id: "SF-1",
        measurement: item.flow_rate,
        measurement_type: "Vazão",
        timestamp: new Date(item.measurement_date),
      });
    });

    response.temperatures?.forEach((item: TemperaturesMeasurement) => {
      measurements.push({
        id: "ST-1",
        measurement: item.temperature_value,
        measurement_type: "Temperatura",
        timestamp: new Date(item.measurement_date),
      });
    });

    response.volumes?.forEach((item: VolumMeasurement) => {
      measurements.push({
        id: "SV-1",
        measurement: item.volume_value,
        measurement_type: "Volume",
        timestamp: new Date(item.measurement_date),
      });
    });
    measurements.sort((a, b) => b.timestamp.valueOf() - a.timestamp.valueOf());
    return measurements;
  } catch (e) {
    console.error(e);
    return [];
  }
}

function formatMeasurement(measurement: Measurement) {
  switch (measurement.measurement_type) {
    case "Temperatura":
      return `Temperatura em ${measurement.measurement}ºC`;
    case "Volume":
      if (measurement.measurement == "1") return "Volume Baixo";
      else if (measurement.measurement == "2") return "Volume Médio";
      else if (measurement.measurement == "3") return "Volume Alto";
      else return "Falha ao ler o volume";
    case "Vazão":
      return `Vazão de ${measurement.measurement}L/min`;
    default:
      return "";
  }
}

export { transformData, formatMeasurement };
