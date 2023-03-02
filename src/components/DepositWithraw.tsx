import React from "react";
import { eggStatusApprovalLink } from "../utils/types";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
interface DepositWithdrawProps {
  eggStatusApprovalLink: eggStatusApprovalLink;
}

function DepositWithraw({ eggStatusApprovalLink }: DepositWithdrawProps) {
  return (
    <div className="w-full md:w-[49%] flex-1 bg-gray-200 flex flex-col space-y-3  rounded-lg p-5">
      <h5 className="font-semibold text-[#FFD166] text-lg">
        deposit &nbsp; <span className="text-gray-500">withdraw</span>
      </h5>
      <div className="font-semibold text-black flex flex-row justify-between text-lg w-full">
        <span>token balance</span> <span className="">0.0</span>
      </div>
      <div className="flex flex-row justify-between items-center w-full border-[2px] border-gray-500 py-1.5 px-3 bg-white rounded-xl">
        <input
          className="border-none outline-none w-4/6 placeholder-gray-500 text-lg"
          placeholder="0.00"
        />
        <button className="p-2.5 px-4 rounded-2xl bg-[#FFD166]">max</button>
      </div>
      <div className="flex flex-row justify-center items-center w-full space-x-2">
        <a
          href={eggStatusApprovalLink.url}
          className="w-fit text-gray-500 text-center font-semibold hover:text-[#FFD166]"
        >
          {eggStatusApprovalLink.desciption}{" "}
        </a>
        <FaExternalLinkSquareAlt className="text-blue-600" />
      </div>
      <button className="w-full text-xs font-semibold bg-[#FFD166] hover:bg-amber-500 py-3 rounded-3xl">
        approve
      </button>
    </div>
  );
}

export default DepositWithraw;
