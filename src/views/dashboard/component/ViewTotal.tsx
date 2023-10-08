import { Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
export const ViewTotal = () => {
  return (
    <div style={{ background: "white", padding: "20px", alignItems: "center" }}>
      <div className="text-[25px] mb-4">View Total</div>
      <div className="flex flex-row justify-between gap-20">
        <div className="w-full flex flex-col gap-2 border-r-2 border-[#f5f5f5] border-solid">
          <label className="text-[20px]">Total Task</label>
          <p className="text-[40px]">100</p>
          <Statistic
            value={9.3}
            precision={2}
            valueStyle={{ color: "#cf1322" }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </div>
        <div className="w-full flex flex-col gap-2 border-r-2 border-[#f5f5f5] border-solid">
          <label className="text-[20px]">Total Task</label>
          <p className="text-[40px]">100</p>
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </div>
        <div className="w-full flex flex-col gap-2 border-r-2 border-[#f5f5f5] border-solid">
          <label className="text-[20px]">Total Task</label>
          <p className="text-[40px]">100</p>
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </div>
        <div className="w-full flex flex-col gap-2 border-r-2 border-[#f5f5f5] border-solid">
          <label className="text-[20px]">Total Task</label>
          <p className="text-[40px]">100</p>
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </div>
        <div className="w-full flex flex-col gap-2 border-r-2 border-[#f5f5f5] border-solid">
          <label className="text-[20px]">Total Task</label>
          <p className="text-[40px]">100</p>
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </div>
        <div className="w-full flex flex-col gap-2 border-r-2 border-[#f5f5f5] border-solid">
          <label className="text-[20px]">Total Task</label>
          <p className="text-[40px]">100</p>
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </div>
      </div>
    </div>
  );
};
