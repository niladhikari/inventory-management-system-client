/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { GiReceiveMoney } from "react-icons/gi";
import { FaWallet, FaMoneyBillAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAllSales from "../../../Hook/useAllSales";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import SalesHistory from "./SalesHistory";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const SalesSummary = () => {
  const [allSales] = useAllSales();
  console.log(allSales);
  const totalSales = allSales.reduce(
    (total, item) => total + item.sellingPrice,
    0
  );
  const totalProfit = allSales.reduce((total, item) => total + item.profit, 0);
  const totalInvest = allSales.reduce(
    (total, item) => total + item.production,
    0
  );

  const data = [
    {
      name: "Sale",
      uv: parseFloat(totalSales).toFixed(2),
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Invest",
      uv: totalInvest,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Profit",
      uv: totalProfit,
      pv: 9800,
      amt: 2290,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <Helmet>
        <title>V Inventory | Sales Summary</title>
      </Helmet>
      <SectionTitle
        heading={"Sales Summary"}
        subHeading={"All the Sales Summary"}
      />

      <h2 className="text-center text-2xl font-bold my-10">Sales Count</h2>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mt={6}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              background: "linear-gradient(to right, #8A2BE2, #FF69B4)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <GiReceiveMoney className="text-4xl text-white" />
            <div>
              <div className="text-3xl font-bold">
                {parseFloat(totalSales).toFixed(2)}
              </div>
              <div className="text-2xl text-black">Total Sale</div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              background: "linear-gradient(to right, #D3A256, #FDE8C0)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaWallet className="text-4xl text-white" />
            <div>
              <div className="text-3xl font-bold">{totalInvest}</div>
              <div className="text-2xl text-black">Total Invest</div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              background: "linear-gradient(to right, #FE4880, #FECDE9)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaMoneyBillAlt className="text-4xl text-white" />
            <div>
              <div className="text-3xl font-bold">{totalProfit}</div>
              <div className="text-2xl text-black">Total Profit</div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <div className="gird lg:justify-center lg:w-96 m-auto my-10">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <h2 className="text-center text-2xl font-bold my-10">Sales History</h2>

      <SalesHistory></SalesHistory>
    </div>
  );
};

export default SalesSummary;
