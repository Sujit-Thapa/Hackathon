"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", Income: 186, Expense: 80 },
  { month: "February", Income: 305, Expense: 200 },
  { month: "March", Income: 237, Expense: 120 },
  { month: "April", Income: 73, Expense: 190 },
  { month: "May", Income: 209, Expense: 130 },
  { month: "June", Income: 214, Expense: 140 },
];

const chartConfig = {
  Income: {
    label: "Income",
    color: "#2563eb",
  },
  Expense: {
    label: "Expense",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function TranscationChart() {
  return (
    <ChartContainer config={chartConfig} className=" h-full ">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />{" "}
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Income" fill="var(--color-Income)" radius={4} />
        <Bar dataKey="Expense" fill="var(--color-Expense)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
