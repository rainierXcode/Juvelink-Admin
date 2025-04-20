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
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
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
  
    return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}