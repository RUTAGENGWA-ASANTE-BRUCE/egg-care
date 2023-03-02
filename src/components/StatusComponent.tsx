import React from "react";
import { eggProperty, StatusComponentProps } from "../utils/types";
import Egg from "../assets/egg.png";
import DepositWithraw from "./DepositWithraw";

function StatusComponent({
  title,
  properties,
  icon,
  eggStatusApprovalLink,
}: StatusComponentProps) {
  return (
    <div className="flex flex-col space-y-5">
      <div className=" flex flex-row space-x-5 items-center justify-center">
        <h1 className="text-[50px] font-bold w-fit text-white">{title}</h1>
        <img src={Egg} className="w-16 h-16 object-contain" />
        <img src={icon} className="w-16 h-16 object-contain" />
      </div>
      {properties.length === 6 ? (
        <div className="flex flex-row flex-wrap w-full justify-between bg-white h-fit gap-5 p-10 rounded-2xl">
          {properties.map((property, index) => (
            <div className="flex flex-col space-y-3 items-center justify-center w-full rounded-lg p-7 md:w-4/6 lg:w-[32%] bg-gray-200">
              <h5 className="text-center text-gray-500 text-lg font-semibold">
                {property.description}
              </h5>
              <h5 className="text-center text-black text-2xl font-semibold">
                {property.value}
              </h5>
            </div>
          ))}
        </div>
      ) : properties.length === 4 ? (
        <div className="flex flex-col md:flex-row w-full bg-white h-fit gap-5 p-10 rounded-2xl">
          <div className="flex flex-col w-full md:w-[49%] space-y-5">
            <div className="w-full flex flex-row flex-wrap  gap-3">
              {properties.map((property, index) => (
                <div className="flex flex-col space-y-3 items-center justify-center w-full rounded-lg p-5 md:w-[48%] bg-gray-200">
                  <h5 className="text-center text-gray-500 text-lg font-semibold">
                    {property.description}
                  </h5>
                  <h5 className="text-center text-black text-2xl font-semibold">
                    {property.value}
                  </h5>
                </div>
              ))}
            </div>
            <button className="w-full text-xs font-semibold bg-[#FFD166] hover:bg-amber-500 py-3 rounded-3xl">
              approve
            </button>
          </div>
          <DepositWithraw eggStatusApprovalLink={eggStatusApprovalLink} />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row w-full bg-white h-fit gap-5 p-10 rounded-2xl">
          <div className="w-full md:w-[49%] flex flex-col gap-5">
            {properties.map((property, index) => (
              <div className="flex flex-col space-y-3 items-center justify-center w-full rounded-lg p-7 bg-gray-200">
                <h5 className="text-center text-gray-500 text-lg font-semibold">
                  {property.description}
                </h5>
                <h5 className="text-center text-black text-2xl font-semibold">
                  {property.value}
                </h5>
              </div>
            ))}
          </div>
          <DepositWithraw eggStatusApprovalLink={eggStatusApprovalLink} />
        </div>
      )}
    </div>
  );
}

export default StatusComponent;
