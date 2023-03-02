import React, { ReactElement } from "react";
import logo from "./logo.svg";
import "../App.css";
import ConnectWallet from "../components/ConnectWallet";
import Egg from "../assets/egg.png";
import egg_banner1 from "../assets/egg_banner1.jpg";
import {
  connectButton,
  cryptoCurrencyType,
  eggProperty,
  StatusComponentProps,
} from "../utils/types";
import EtheriumLogo from "../assets/ethereum.png";
import ArbitrumLogo from "../assets/arbitrum.png";
import StatusComponent from "../components/StatusComponent";

import eggStatsIcon from "../assets/eggStats.png";
import fullProtecIcon from "../assets/fullProtec.png";
import smolProtecIcon from "../assets/smolProtec.png";
import bigProtecIcon from "../assets/bigProtec.png";

function Ethereum(): JSX.Element {
  const cryptoCurrencies: cryptoCurrencyType[] = [
    {
      name: "Ethereum",
      logo: EtheriumLogo,
    },
    {
      name: "Arbitrum",
      logo: ArbitrumLogo,
    },
  ];

  const connectButtons: connectButton[] = [
    {
      name: "Telegram",
      link: "https://t.me/eggsportal",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/EggsCare",
    },
    {
      name: "Docs",
      link: "https://docs.eggs.care/",
    },
    {
      name: "Chart",
      link: "https://www.dextools.io/app/en/ether/pair-explorer/0xc54ba7aabe7164ca2aa092900060fe2ba6eccd8b",
    },
  ];

  const eggStats: eggProperty[] = [
    {
      description: "Total TVL",
      value: "$9,479,195.11",
    },
    {
      description: "Marketcap (Fully Diluted)",
      value: "$3,450,588.61",
    },
    {
      description: "Total Liquidity",
      value: "$4,615,297",
    },
    {
      description: "Total Supply",
      value: "1,760,851,392,475 EGGS",
    },
    {
      description: "Supply in Vaults",
      value: "1,633,310,377,490 EGGS",
    },
    {
      description: "Circulating supply",
      value: "127,477,788,587 EGGS",
    },
  ];

  const fullProtec: eggProperty[] = [
    {
      description: "protec amount",
      value: "$0.00",
    },
    {
      description: "TVL",
      value: "$4,833,360.36",
    },
  ];

  const bigProtec: eggProperty[] = [
    {
      description: "protec amount",
      value: "$0.00",
    },
    {
      description: "eggs accumulatooor",
      value: "...",
    },
    {
      description: "eggspected APR",
      value: "2,846.53%",
    },
    {
      description: "TVL",
      value: "$4,092,293.67",
    },
  ];

  const smolProtec: eggProperty[] = [
    {
      description: "protec amount",
      value: "$0.00",
    },
    {
      description: "eggs accumulatooor",
      value: "...",
    },
    {
      description: "eggspected APR",
      value: "2,359.85%",
    },
    {
      description: "TVL",
      value: "$518,284.40",
    },
  ];

  const allEggStatuses: StatusComponentProps[] = [
    {
      title: "Egg Stats",
      properties: eggStats,
      icon: eggStatsIcon,
      eggStatusApprovalLink: {
        desciption: "",
        url: "",
      },
    },
    {
      title: "Full Protec",
      properties: fullProtec,
      icon: fullProtecIcon,
      eggStatusApprovalLink: {
        desciption: "get EGGS here",
        url: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2e516ba5bf3b7ee47fb99b09eadb60bde80a82e0",
      },
    },
    {
      title: "Big Protec",
      properties: bigProtec,
      icon: bigProtecIcon,
      eggStatusApprovalLink: {
        desciption: "provide LP here",
        url: "https://app.uniswap.com/#/add/v2/ETH/0x2e516BA5Bf3b7eE47fb99B09eaDb60BDE80a82e0",
      },
    },
    {
      title: "Smol Protec",
      properties: smolProtec,
      icon: smolProtecIcon,
      eggStatusApprovalLink: {
        desciption: "get EGGS here",
        url: "https://app.uniswap.com/#/add/v2/ETH/0x2e516BA5Bf3b7eE47fb99B09eaDb60BDE80a82e0",
      },
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#FFD166] px-4 lg:px-48 py-10">
      <ConnectWallet />
      <div className=" flex flex-row space-x-5 items-center justify-center">
        <h1 className="text-[80px] font-bold w-fit text-white">Eggs</h1>
        <img src={Egg} />
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full mt-10 h-fit space-y-5 md:space-y-0 ">
        <img
          src={egg_banner1}
          className="w-full lg:w-[49.3%] h-[530px] rounded-2xl  "
        />
        <div className="text-sm p-7 flex flex-col space-y-6 w-full lg:w-[49.3%] lg:h-[530px] bg-white rounded-2xl">
          <p className="font-semibold leading-[30px]">
            The notorious Egg Cartel are running wild globally and causing a
            unprecedented egg shortage! The egg supply decreases rapidly with
            0.001% per block... The only way to protec your eggs is to put them
            in the vault.
            <br />
            <br />
            There are three types of vaults. Full protec vault will protect your
            precious eggs FULLY and won't be affected by debase. Full protec
            vault has a locking period of 7 days. The other two vaults only
            protect your EGGS partially in the form of rewards. The rewards are
            10 million EGGS per block. Big protec vault earns you 9/10 of the
            rewards by staking EGGS/ETH LP on Uniswap V2. The smol protec vault
            earns you only 1/10 of the rewards. Both of these vaults only have a
            locking period of 24 hours.
          </p>

          <div className="lg:px-10 flex flex-col space-y-3 md:space-y-0  md:flex-row justify-between w-full">
            {connectButtons.map((button, index) => (
              <a
                href={button.link}
                className="w-full md:w-fit text-xs font-semibold py-3 px-5 border-[#FFD166] border-[3px] text-black hover:text-white rounded-3xl"
              >
                {button.name}
              </a>
            ))}
          </div>
          <button className="w-full text-xs font-semibold bg-[#FFD166] hover:bg-amber-500 py-3 rounded-3xl">
            Get EGGS
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full space-y-10 mt-10">
        {allEggStatuses.map((status, index) => (
          <StatusComponent key={index} {...status} />
        ))}
      </div>
    </div>
  );
}

export default Ethereum;
