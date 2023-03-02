import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import MetamaskLogo from '../assets/MetaMask_Fox.png';
import RainbowLogo from '../assets/rainbow-wallet.png';
import CoinbaseWlletLogo from '../assets/coinbase.jpg';
import WalletConnectLogo from '../assets/walletConnect.png';

import { wallet } from "../utils/types";


export default function ConnectWallet() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const wallets:wallet[]=[
    {
      name:"Metamask",
      logo:MetamaskLogo,
    },
    {
      name:"Rainbow",
      logo:RainbowLogo,
    },
    {
      name:"Coinbase Wallet",
      logo:CoinbaseWlletLogo,
    },
    {
      name:"WalletConnect",
      logo:WalletConnectLogo,
    }
  ]

  return (
    <>
      <div className="fixed right-3 top-4 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="text-[#FFD166] font-semibold bg-white rounded-md p-2"
        >
          Connect wallet
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[360px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-row justify-between w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-center font-bold leading-6 w-5/6 text-gray-900"
                    >
                      Connect a wallet
                    </Dialog.Title>
                    <button
                      onClick={closeModal}
                      className="w-8 rounded-full h-8 flex bg-gray-200 border rounde-full items-center justify-center"
                    >
                      <IoCloseSharp className="text-lg text-gray-800" />
                    </button>
                  </div>

                    <p className="text-sm mt-7 font-semibold text-gray-500">
                      Popular
                    </p>
                  <div className="mt-3 flex flex-col space-y-3">
                    {wallets.map((wallet, index) => (
                        <button className="flex flex-row space-x-3 w-full p-1.5 hover:bg-gray-100 rounded-md">
                          <img src={wallet.logo} className="w-8 h-8  rounded-md" />
                          <p className="mt-1 font-bold">{wallet.name}</p>
                        </button>
                        ))}
                  </div>
                  <p className="text-sm mt-7 font-semibold text-gray-500">
                      New to Etherium wallets?
                    </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
