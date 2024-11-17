import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  User,
  Thermometer,
  ChevronRight,
} from "lucide-react";
import {
  AiOutlineAppstore,
  AiOutlineFileText,
  AiOutlinePlusSquare,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiRotateCcw, FiTruck, FiBox, FiClipboard } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiBox, BiPackage } from "react-icons/bi";
import { FiSearch, FiBell, FiMoreVertical } from "react-icons/fi";

const App = () => {


  const SidebarItem = ({ icon: Icon, active }) => (
    <div
      className={`w-full p-3 hover:bg-gray-50 cursor-pointer ${
        active ? "bg-gray-50" : ""
      }`}
    >
      <Icon className="w-5 h-5 text-gray-500" />
    </div>
  );

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

  const Divider = () => <div className="hidden md:block w-px h-10 bg-gray-300" />
  

  const IconWithDivider = ({ icon: Icon }) => <div className="flex items-center"><Icon className="w-5 h-5 text-gray-400" /></div>
  

  const Divider2 = () => <div className="h-5 w-px bg-gray-200 mx-2" />;

  const QuickAction = ({ icon: Icon, text }) => (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Icon className="w-6 h-6 text-black" />
      <span className="text-xs font-medium text-black">{text}</span>
    </div>
  );

  const ActivityItem = ({ user, role, action, loadNo, location }) => (
    <div
      className="bg-white p-4  shadow-sm hover:bg-gray-50 "
      style={{
        border: "0.5px solid lightgray",
      }}
    >
      <div className="space-x-1">
        <span className="font-medium text-gray-800">{user}</span>
        {role && <span className="text-gray-500">({role})</span>}
        <span className="text-gray-600">{action}</span>
        {location && <span className="text-gray-600">at </span>}
        {location && (
          <span className="font-medium text-gray-800">{location}</span>
        )}
        {location && <span className="text-gray-600"> for </span>}
        <span className="font-medium text-gray-800">{loadNo}</span>
      </div>
    </div>
  );

  const AlertItem = ({ type, title, loadNo, billTo, date }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            {type === "driver" ? (
              <div className="p-2 bg-gray-100 rounded-full">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            ) : (
              <div className="p-2 bg-gray-100 rounded-full">
                <Thermometer className="w-4 h-4 text-gray-600" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                <span className="text-xs text-gray-500">{date}</span>
              </div>
              <div className="text-xs text-gray-500">
                Load No: {loadNo} , Bill To: {billTo}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex items-center gap-2 justify-end mt-2 underline">
            <button className="text-sm text-gray-700 hover:text-gray-900 mx-10">
              Ignore
            </button>
            <button className="px-6 py-1.5 bg-blue-800 text-white rounded text-sm hover:bg-blue-900">
              Resolve
            </button>
          </div>
        </div>
      </div>
    );
  };

  // bwdbqwd

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-full md:w-16 bg-white shadow-sm flex flex-row md:flex-col items-center justify-between md:justify-start py-4 gap-4 sticky top-0 z-50 overflow-x-auto md:overflow-x-visible">
        <div className="md:mb-6">
          <img
            src="https://i.ibb.co/TLk6zYT/Screenshot-2024-11-16-024331.png"
            alt="Logo"
            className="w-8 h-8"
          />
        </div>
        <div className="flex flex-row md:flex-col flex-1 gap-4">
          <SidebarItem icon={AiOutlineAppstore} active />
          <SidebarItem icon={AiOutlinePlusSquare} />
          <SidebarItem icon={FiRotateCcw} />
          <SidebarItem icon={AiOutlineFileText} />
          <SidebarItem icon={FiTruck} />
          <SidebarItem icon={FiBox} />
          <SidebarItem icon={FiClipboard} />
          <SidebarItem icon={AiOutlineSetting} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center justify-around gap-2 bg-white rounded-full shadow-sm border border-gray-200 w-full md:w-40 px-2 py-2">
            <IconWithDivider icon={FiSearch} />
            <Divider2 />
            <IconWithDivider icon={FiBell} />
            <Divider2 />
            <IconWithDivider icon={FiMoreVertical} />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <MetricCard
            title="Orders"
            metrics={[
              {
                name: "Upcoming",
                value: "50",
                color: "#FFD700",
                textColor: "#856404",
              },
              {
                name: "Ongoing",
                value: "100",
                color: "#8A2BE2",
                textColor: "#553C9A",
              },
              {
                name: "Completed",
                value: "50",
                color: "#40E0D0",
                textColor: "#2C7A7B",
              },
            ]}
          />
          <MetricCard
            title="Trips"
            metrics={[
              {
                name: "Upcoming",
                value: "50",
                color: "#FFD700",
                textColor: "#856404",
              },
              {
                name: "Ongoing",
                value: "100",
                color: "#8A2BE2",
                textColor: "#553C9A",
              },
              {
                name: "Completed",
                value: "50",
                color: "#40E0D0",
                textColor: "#2C7A7B",
              },
            ]}
          />
          <MetricCard
            title="Revenue"
            metrics={[
              {
                name: "Upcoming",
                value: "50",
                color: "#FFD700",
                textColor: "#856404",
              },
              {
                name: "Ongoing",
                value: "100",
                color: "#8A2BE2",
                textColor: "#553C9A",
              },
              {
                name: "Completed",
                value: "50",
                color: "#40E0D0",
                textColor: "#2C7A7B",
              },
            ]}
          />
          <MetricCard
            title="Expenses"
            metrics={[
              {
                name: "Freight Charge",
                value: "50",
                color: "#FFD700",
                textColor: "#856404",
              },
              {
                name: "Driver Charge",
                value: "100",
                color: "#8A2BE2",
                textColor: "#553C9A",
              },
              {
                name: "Other Charges",
                value: "50",
                color: "#40E0D0",
                textColor: "#2C7A7B",
              },
            ]}
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h1 className="text-base font-medium text-black-900 mb-4">
            Quick Actions
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex items-center justify-between bg-white p-4 rounded-xl shadow-lg px-6 md:px-10 py-8 gap-4">
            <QuickAction icon={AiOutlineFileText} text="Create Indents" />
            <div className="hidden lg:block">
              <Divider />
            </div>
            <QuickAction icon={FiTruck} text="Add Vehicle" />
            <div className="hidden lg:block">
              <Divider />
            </div>
            <QuickAction icon={BiBox} text="Add Trailer" />
            <div className="hidden lg:block">
              <Divider />
            </div>
            <QuickAction icon={AiOutlineUser} text="Add Driver" />
            <div className="hidden lg:block">
              <Divider />
            </div>
            <QuickAction icon={BiPackage} text="Add Indents" />
          </div>
        </div>

        {/* Updated Alerts Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-base font-medium text-black-900">
                High Priority Alerts
              </h1>

              <span className="text-xs text-gray-500">(14)</span>
            </div>
            <button className="text-xs text-blue-800 hover:text-blue-900 flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AlertItem
              type="driver"
              title="Driver Raised Concern"
              loadNo="12454"
              billTo="RoaDo demo Bangalore"
              date="13 Feb 24"
            />
            <AlertItem
              type="temperature"
              title="Reefer Temp. out of range"
              loadNo="12454"
              billTo="RoaDo demo Bangalore"
              date="13 Feb 24"
            />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      {/* Right Sidebar - Continuation */}
      <div className="w-full md:w-80 bg-white shadow-sm p-4">
        <div className="mb-6">
          <div className=" mb-4">
            <h2 className="text-sm font-medium text-gray-800 mb-1">
              Today's Highlights (14)
            </h2>
            <div className="text-xs text-gray-500">19 Mar 2024</div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div
              className="bg-white rounded p-3 shadow-sm "
              style={{
                border: "1px solid lightgrey",
              }}
            >
              <div className="text-xs text-gray-500">Income</div>
              <div className="text-green-600 font-medium text-base mt-1">
                100000 CAD
              </div>
              <div className="text-xs text-gray-400 mt-1">
                2 payments received
              </div>
            </div>
            <div
              className="bg-white rounded p-3 shadow-sm border border-gray-100"
              style={{
                border: "1px solid lightgrey",
              }}
            >
              <div className="text-xs text-gray-500">Expenses</div>
              <div className="text-red-600 font-medium text-base mt-1">
                50000 CAD
              </div>
              <div className="text-xs text-gray-400 mt-1">5 payments paid</div>
            </div>
          </div>
        </div>

        {/* Completed Activities */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-800">
              Completed Activities (14)
            </h3>
            <button className="text-xs text-blue-600 hover:underline">
              View All
            </button>
          </div>
          <div className="">
            <ActivityItem
              user="Gurpreet Singh"
              role="Dispatch team"
              action="has created"
              loadNo="Load No. I-I-AAA-1325"
            />{" "}
            <ActivityItem
              user="Gurpreet Singh"
              role="Dispatch team"
              action="has created"
              loadNo="Load No. I-I-AAA-1325"
            />{" "}
            <ActivityItem
              user="Gurpreet Singh"
              role="Dispatch team"
              action="has created"
              loadNo="Load No. I-I-AAA-1325"
            />
            <ActivityItem
              user="Aman"
              role="Driver"
              action="Picked Up goods"
              location="Location_Name"
              loadNo="Load No. I-I-AAA-1325"
            />
          </div>
        </div>

        {/* Scheduled Activities */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium text-gray-800">
              Scheduled Activities (14)
            </h3>
            <button className="text-xs text-blue-600 hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-2">
            <ActivityItem
              user="Aman"
              role="Driver"
              action="will be delivered by"
              loadNo="Load No. I-I-AAA-1325"
            />
            <ActivityItem
              user="Gurpreet Singh"
              action="will start added by"
              loadNo="Load No. I-I-AAA-1325"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
