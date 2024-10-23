import { Badge } from "@/components/ui/badge";

export const columns = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">Id</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "measurement_type",
    header: () => <div className="text-center">Tipo</div>,
    cell: ({ row }) => {
      const value = row.getValue("measurement_type");
      return (
        <div className="grid justify-center ">
          <Badge
            variant="default"
            style={{ borderRadius: "10px", cursor: "pointer" }}
            className="bg-white"
          >
            {value}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "measurement",
    header: () => <div className="text-center w-max">Medição</div>,
    cell: ({ row }) => (
      <div className="text-center w-max">{row.getValue("measurement")}</div>
    ),
  },
  {
    accessorKey: "timestamp",
    header: () => <div className="text-center">Ocorrência</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("timestamp"));
      return <div className="text-center">{date.toLocaleString()}</div>;
    },
  },
];
