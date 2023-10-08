import React from "react";
import { VictoryBar, VictoryPie, VictoryGroup, VictoryChart } from "victory";
const LayoutChart: React.FC = () => {
  return (
    <div>
      <div className="flex gap-10">
        <div className="w-[200px] h-[200px] bg-white p-[20px] ">
          <VictoryBar />
        </div>
        <div className="w-[200px] h-[200px] bg-white p-[20px] ">
          <VictoryPie
            data={[
              { x: "Cats", y: 35 },
              { x: "Dogs", y: 40 },
              { x: "Birds", y: 55 },
            ]}
          />
        </div>
        <div className="w-[200px] h-[200px] bg-white p-[20px] ">
          <VictoryChart>
            <VictoryGroup offset={20} colorScale={"qualitative"}>
              <VictoryBar
                data={[
                  { x: 1, y: 1 },
                  { x: 2, y: 2 },
                  { x: 3, y: 5 },
                ]}
              />
              <VictoryBar
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 1 },
                  { x: 3, y: 7 },
                ]}
              />
              <VictoryBar
                data={[
                  { x: 1, y: 3 },
                  { x: 2, y: 4 },
                  { x: 3, y: 9 },
                ]}
              />
            </VictoryGroup>
          </VictoryChart>
        </div>
      </div>
    </div>
  );
};
export default LayoutChart;
