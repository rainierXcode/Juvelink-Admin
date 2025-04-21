"use client"
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function MonthlyVisitors(){
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<echarts.EChartsType | null>(null);
  
    useEffect(() => {
      if (!chartRef.current) return;
  
      chartInstance.current = echarts.init(chartRef.current);
  
      chartInstance.current.setOption({
        title: {
          text: 'Visitors Over Time',
          left: "center",
          textStyle: {
            fontSize: 14,
            color: '#000',
            fontWeight: 600,
          },
          subtextStyle: {
            fontSize: 12,
            color: '#999'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        radar: {
          shape: 'circle',
          center: ['50%', '55%'],
          radius: '55%',
          indicator: [
            { name: 'Jan' },
            { name: 'Feb' },
            { name: 'Mar' },
            { name: 'Apr' },
            { name: 'May' },
            { name: 'Jun' }
          ]
        },
        series: [
          {
            name: 'Visitors over 6 months',
            type: 'radar',
            areaStyle: {},
            lineStyle: {
              width: 3,
              color: '#2a9d90'
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#e76e51',
            },
            center: ["50%", "60%"],
            data: [
              {
                value: [40, 10, 74, 100, 30, 80],
                name: 'Month'
              }
            ]
          }
        ]
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
  
    return <div ref={chartRef} style={{ width: "100%", height: "100%" }} className="col-span-4 px-0.5 py-3"/>;
}