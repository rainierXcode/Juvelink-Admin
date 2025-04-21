"use client"
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function CasePie(){
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<echarts.EChartsType | null>(null);
  
    useEffect(() => {
      if (!chartRef.current) return;
  
      chartInstance.current = echarts.init(chartRef.current);
  
      chartInstance.current.setOption({
        title: {
            text: "Case Type",
            left: "center",
            textStyle: {
                fontSize: 14,
                color: '#000',
                fontWeight: 600,
      
            }
        },
        tooltip: {
          trigger: "item",
        },
      
        series: [
          {
            name: "Access Source",
            type: "pie",
            radius: "50%",
            center: ["50%", "60%"],
            data: [
              { value: 120, name: 'Others' },
              { value: 300, name: 'Robbery' },
              { value: 250, name: 'Assault' },
              { value: 200, name: 'Burglary' },
              { value: 310, name: 'Drugs' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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