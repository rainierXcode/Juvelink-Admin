"use client"
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function MonthlyNewAdmission(){
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
            text: "Monthly New Admission",
            left: "center",
            textStyle: {
                fontSize: 14,
                color: '#000',
                fontWeight: 600,
      
            }
        },
        tooltip: {
            trigger: 'item', 
            formatter: '{b}: {c}', 
            backgroundColor: 'rgba(0,0,0,0.7)',
            textStyle: {
              color: '#fff', 
            }
          },
          xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            }
          },
          yAxis: {
            type: 'value',
            splitLine: false,
            splitNumber: 3,
          },
          series: [
            {
              data: [7, 5, 3, 5, 1, 8, 9, 10, 23, 3, 6, 8],
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 13,
              lineStyle: {
                type: [7, 10],
                cap: 'round',
                width: 5,
                color: '#2a9d90'
              },
            
              itemStyle: {
                normal: {
                  color: function(params : { dataIndex: number }) {
                    const colors = ['#e76e51', '#2a9d90', '#274754', '#f3a462'];
                      return colors[params.dataIndex % colors.length];
                  }
                }
              }
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
  
    return <div ref={chartRef} style={{ width: "100%", height: "100%" }} className="col-span-7 px-0.5 py-3"/>;
}