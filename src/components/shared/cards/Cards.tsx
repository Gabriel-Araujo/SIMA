import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MeasurementsContext } from "@/lib/types";
import { useContext } from "react";

function Cards() {
  const [measurements] = useContext(MeasurementsContext);
  console.log(
    measurements.filter((item) => item.measurement_type == "Temperatura"),
  );
  return (
    <div className="inline-flex justify-center gap-x-5 max-h-44 overflow-x-scroll overflow-y-hidden overscroll-contain">
      <Card className="min-w-60 max-w-60">
        <CardHeader>
          <CardTitle className="text-xl">Sensores</CardTitle>
        </CardHeader>
        <CardContent className="inline-flex flex-wrap gap-1">
          <Badge
            style={{
              borderRadius: "10px",
              backgroundColor: "#65a30d",
              color: "white",
            }}
          >
            Temperatura
          </Badge>
          <Badge
            style={{
              borderRadius: "10px",
              backgroundColor: "#65a30d",
              color: "white",
            }}
          >
            Volume
          </Badge>
          <Badge
            style={{
              borderRadius: "10px",
              backgroundColor: "#65a30d",
              color: "white",
            }}
          >
            Vazão
          </Badge>
        </CardContent>
      </Card>
      <Card className="min-w-60 max-w-60">
        <CardHeader>
          <CardTitle className="text-xl">Última Medição</CardTitle>
        </CardHeader>
        <CardContent>
          <p style={{ fontWeight: "bold" }}>
            {measurements[0]?.measurement ? measurements[0].measurement : ""}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export { Cards };
