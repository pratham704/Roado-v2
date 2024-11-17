import React from 'react'
import {
  User,
  Thermometer,
} from "lucide-react";


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

export default AlertItem
