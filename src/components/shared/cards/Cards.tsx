import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Cards() {
  return (
    <div className="inline-flex gap-x-5 max-h-44 overflow-x-scroll overflow-y-hidden overscroll-contain">
      <Card>
        <CardHeader>
          <CardTitle>Temperatura Média</CardTitle>
          <CardDescription>Temperatura média nas últimas 24h.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Vazão Média</CardTitle>
          <CardDescription>Vazão média nas últimas 24h.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sensores</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Última Medição</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
}

export { Cards };
