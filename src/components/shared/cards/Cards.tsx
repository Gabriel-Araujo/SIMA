import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Cards() {
  return (
    <div className="inline-flex justify-center gap-x-5 max-h-44 overflow-x-scroll overflow-y-hidden overscroll-contain">
      <Card className="min-w-60 max-w-60">
        <CardHeader>
          <CardTitle className="text-xl">Temperatura Média</CardTitle>
          <CardDescription className="text-xs">
            Temperatura média nas últimas 24h.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ fontWeight: "bold" }}>Card Content</p>
        </CardContent>
      </Card>
      <Card className="min-w-60 max-w-60">
        <CardHeader>
          <CardTitle className="text-xl">Vazão Média</CardTitle>
          <CardDescription className="text-xs">
            Vazão média nas últimas 24h.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p style={{ fontWeight: "bold" }}>Card Content</p>
        </CardContent>
      </Card>
      <Card className="min-w-60 max-w-60">
        <CardHeader>
          <CardTitle className="text-xl">Sensores</CardTitle>
        </CardHeader>
        <CardContent>
          <p style={{ fontWeight: "bold" }}>Card Content</p>
        </CardContent>
      </Card>
      <Card className="min-w-60 max-w-60">
        <CardHeader>
          <CardTitle className="text-xl">Última Medição</CardTitle>
        </CardHeader>
        <CardContent>
          <p style={{ fontWeight: "bold" }}>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
}

export { Cards };
