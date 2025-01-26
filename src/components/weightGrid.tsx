import {AgGridReact} from "ag-grid-react";
import {colorSchemeDarkBlue, themeQuartz} from 'ag-grid-community'
import {useState} from "react";
import {Box} from "@mantine/core";
import {useListWeights} from "../api/hooks/weightHooks.ts";


const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
});

const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);

export const WeightGrid = () => {


  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
    {field: "weight", headerName: "Weight"},
    {field: "w_time", headerName: "Time", valueFormatter:  (p: any) => formatter.format(new Date(p.value))},
  ]);

  const {data} = useListWeights("d9467dbf-1eb1-4e5a-96fb-ac11776a8c0d", 0)


  // Row Data: The data to be displayed.

  return (
    <Box bg={'blue'}>
      <AgGridReact
        theme={themeDarkBlue}
        rowData={data}
        //@ts-expect-error something something
        columnDefs={colDefs}
      />
    </Box>
  )
}
