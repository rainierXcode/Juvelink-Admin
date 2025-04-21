"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function AgeDistribution() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.EChartsType | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    chartInstance.current = echarts.init(chartRef.current);
    chartInstance.current.setOption({
      grid: {
        left: 10,  
        right: 10,  
        top: 40,    
        bottom: 10,
        containLabel: true,
      },
       title: {
            text: "Age Distribution Graph",
            left: "center",
            textStyle: {
                fontSize: 14,
                color: '#000',
                fontWeight: 600,
      
            }
      },
      xAxis: {
        type: "category",
        axisLine: {
          show: false,
        },
        axisTick: {
            show: false,
        },
        data: ["10-12", "13-15", "16-18", "19-20", "20+"],
      },
      yAxis: {
        type: "value",
        splitLine: false,
        splitNumber: 4,
      },
      series: [
        {
          data: [30, 20, 25, 3, 5],
          type: "bar",
          itemStyle: {
            color: function (params : { dataIndex: number }) {
              return params.dataIndex % 2 === 0 ? "#f26465" : "#71c0e1";
            },
          },
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          barMaxWidth: 20,
        },
      ],
    });

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} className="col-span-3 px-0.5 py-3"/>;
}
