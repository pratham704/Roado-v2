import React from 'react'
import { PieChart, Pie, Cell } from "recharts";

const MetricCard = ({ title, total, metrics }) => {
    const data = metrics.map((metric) => ({
      name: metric.name,
      value: parseInt(metric.value),
      color:
        metric.name === "Upcoming"
          ? "#FCD34D"
          : metric.name === "Ongoing"
          ? "#818CF8"
          : "#4FD1C5",
    }));

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <PieChart width={128} height={128}>
              <Pie
                data={data}
                cx={64}
                cy={64}
                innerRadius={40}
                outerRadius={56}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs text-gray-500">Total</span>
              <span className="font-semibold text-lg">{total}</span>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-50 to-yellow-200">
              <span className="text-gray-700 font-medium">Upcoming</span>
              <span className="font-semibold text-gray-700">50</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-purple-400">
              <span className="text-gray-700 font-medium">Ongoing</span>
              <span className="font-semibold text-gray-700">100</span>
            </div>
            <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-gradient-to-r from-teal-50 to-teal-400">
              <span className="text-gray-700 font-medium">Completed</span>
              <span className="font-semibold text-gray-700">50</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default MetricCard
