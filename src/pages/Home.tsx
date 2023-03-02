import React, { ReactElement } from "react";
import logo from "./logo.svg";
import "../App.css";
import ConnectWallet from "../components/ConnectWallet";
import Egg from "../assets/egg.png";
import egg_banner1 from "../assets/egg_banner1.jpg";
import { connectButton, cryptoCurrencyType } from "../utils/types";
import EtheriumLogo from "../assets/ethereum.png";
import ArbitrumLogo from "../assets/arbitrum.png";
function Home(): JSX.Element {
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
            unprecedented egg shortage! The egg supply decreases rapidly... The
            only way to protec your eggs is to put them in vaults.
            <br />
            There are different types of vaults depending what network you
            choose. Ethereum mainnet or Arbitrum?
          </p>
          <div className=" flex flex-col md:flex-row justify-between w-full space-y-3 md:space-y-0 ">
            {cryptoCurrencies.map((currency, index) => (
              <button className="w-full md:w-[48.5%] h-36 border-[3px] hover:bg-[#FFD166] flex  border-[#FFD166] rounded-md justify-center items-center">
                <img src={currency.logo} className="w-[50%]" />
              </button>
            ))}
          </div>
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
    </div>
  );
}

export default Home;
