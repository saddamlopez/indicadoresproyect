import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'INDICADORES DE EFICIENCIA' },
            { id: 1, value: 15, label: 'INDICADORES DE EFICACIA' },
            { id: 2, value: 20, label: 'INDICADORES DE EFECTIVIDAD' },
          ],
        },
      ]}
      width={800}
      height={250}
    />
  );
}
