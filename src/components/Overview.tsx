import Card from "../assets/gold.svg";
import Arrow from "../assets/arrow.svg";
import CirclePlus from "../assets/circle plus.svg";
import Calendar from "../assets/calendar.svg";
import Wavy from "../assets/wavy.svg";
import upArrow from "../assets/up arrow.png";
import downArrow from "../assets/down arrow.png";
import plusCircle from "../assets/green plus.png";
import ngFlag from "../assets/ngn flag.png";
import ukFlag from "../assets/uk flag.png";
import usFlag from "../assets/United States.svg"
import usdt from "../assets/usdt.svg";

const Overview = () => {
  return (
    <div className="overview__height bg-gray-back py-3 px-3 lg:py-6 lg:px-9">
      <h1 className="font-bold text-3xl">Overview</h1>
      <div className="flex flex-wrap w-full mt-7">
        <div className="forced__width w-full bg-white h-auto p-6 lg:mr-8 mb-10 lg:mb-0">
          <div className="relative flex bg-main-blue gap-5 text-white px-4 py-6 justify-between items-center rounded-md flex-wrap">
            <img src={Wavy} className="absolute right-0 w-72" />
            <div>
              <p className="text-xs flex items-center">
                <img src={Calendar} alt="calendar" className="w-4 mr-1" />{" "}
                Friday 22nd, October 2022
              </p>
              <p className="font-bold text-2xl  md:text-3xl">Good Evening</p>
            </div>
            <button className="h-10 bg-button-green outline-none rounded-md text-xs px-3 flex items-center z-20">
              <img src={CirclePlus} alt="create" className="mr-2" />
              Create New Wallet
            </button>
          </div>
          <div className="flex flex-col overflow-hidden w-full">
            <div className="flex justify-between mt-10">
              <p className="font-bold text-2xl">Wallets</p>
              <p className="flex items-center text-button-green cursor-pointer">
                <img src={plusCircle} alt="fund" width={20} className="mr-1" />
                Fund Wallet
              </p>
            </div>
            <div className="w-full bg-purple-500 overflow-hidden">
              <div className="bg-red-500 w-full gap-5 flex overflow-scroll">
                <div className="bg-wallet-first border-2 w-64 flex-shrink-0 h-64 rounded-xl p-3">
                    <div className="flex items-center pt-2 pb-5 border-b-2 border-wallet-border border-dashed">
                        <img src={usdt} alt="usdt" />
                        <p className="font-bold text-lg ml-3">$548 <span className="text-table-text ml-1 text-sm font-thin">USDT</span></p>
                    </div>
                </div>
                <div className="border-2 w-64 flex-shrink-0 h-64 rounded-xl"></div>
                <div className="border-2 w-64 flex-shrink-0 h-64 rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className="mt-10 min-w-full overflow-scroll">
            <table className="min-w-full w-max overflow-scroll">
              <tr className="">
                <th></th>
                <th className="text-xs font-semibold text-left">Reference</th>
                <th className="text-xs font-semibold text-left pr-5">Amount</th>
                <th className="text-xs font-semibold text-left">Description</th>
                <th className="text-xs font-semibold text-left">Date</th>
                <th></th>
              </tr>
              <tr>
                <td className="pr-5 py-2 text-sm">
                  <img
                    src={upArrow}
                    alt=""
                    width={25}
                    height={10}
                    className="bg-up-arrow-bg p-1 rounded-full"
                  />
                </td>
                <td className="text-xs py-2 font-semibold pr-5">
                  REF : 1234MT
                </td>
                <td className="text-xs text-table-text py-2 pr-5"> -$0.00</td>
                <td className="text-xs text-table-text py-2 pr-5">
                  For Children School fees
                </td>
                <td className="text-xs text-table-text py-2 pr-5">
                  11:00am 21 oct
                </td>
                <td className="text-xs py-2 ml-32">
                  <button className="p-2 bg-green-btn-bg text-button-green flex items-center justify-center w-20 rounded-sm">
                    Completed
                  </button>
                </td>
              </tr>
              <tr>
                <td className="pr-5 py-2 text-sm">
                  <img
                    src={downArrow}
                    alt=""
                    width={25}
                    height={10}
                    className="bg-down-arrow-bg p-1 rounded-full"
                  />
                </td>
                <td className="text-xs py-2 font-semibold pr-5">
                  REF : 1234MT
                </td>
                <td className="text-xs text-table-text py-2 pr-5"> -$0.00</td>
                <td className="text-xs text-table-text py-2 pr-5">
                  For Children School fees
                </td>
                <td className="text-xs text-table-text py-2 pr-5">
                  11:00am 21 oct
                </td>
                <td className="text-xs py-2 ml-32">
                  <button className="p-2 bg-orange-btn-bg text-orange-btn-text flex items-center justify-center w-20 rounded-sm">
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td className="pr-5 py-2 text-sm">
                  <img
                    src={upArrow}
                    alt=""
                    width={25}
                    height={10}
                    className="bg-up-arrow-bg p-1 rounded-full"
                  />
                </td>
                <td className="text-xs py-2 font-semibold pr-5">
                  REF : 1234MT
                </td>
                <td className="text-xs text-table-text py-2 pr-5"> -$0.00</td>
                <td className="text-xs text-table-text py-2 pr-5">
                  For Children School fees
                </td>
                <td className="text-xs text-table-text py-2 pr-5">
                  11:00am 21 oct
                </td>
                <td className="text-xs py-2 ml-32">
                  <button className="p-2 bg-green-btn-bg text-button-green flex items-center justify-center w-20 rounded-sm">
                    Completed
                  </button>
                </td>
              </tr>
              <tr>
                <td className="pr-5 py-2 text-sm">
                  <img
                    src={downArrow}
                    alt=""
                    width={25}
                    height={10}
                    className="bg-down-arrow-bg p-1 rounded-full"
                  />
                </td>
                <td className="text-xs py-2 font-semibold pr-5">
                  REF : 1234MT
                </td>
                <td className="text-xs text-table-text py-2 pr-5"> -$0.00</td>
                <td className="text-xs text-table-text py-2 pr-5">
                  For Children School fees
                </td>
                <td className="text-xs text-table-text py-2 pr-5">
                  11:00am 21 oct
                </td>
                <td className="text-xs py-2 ml-32">
                  <button className="p-2 bg-orange-btn-bg text-orange-btn-text flex items-center justify-center w-20 rounded-sm">
                    Pending
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="forced__width bg-white lg:w-96 h-auto py-5 px-3 lg:px-8">
          <h2 className=" font-bold text-xl">Savings</h2>
          <div className="border-2 mt-3 border-gray-border w-full rounded-lg p-5 flex flex-col">
            <div className="flex items-center">
              <img src={Card} alt="gold" />
              <p className="text-base ml-3">Gold Savings</p>
            </div>
            <p className="text-xl flex items-center font-bold my-5">
              567.8744 <span className="text-xs font-normal ml-3">$135.25</span>
            </p>
            <button className="flex h-10 w-32 justify-center rounded-md items-center text-xs cursor-pointer bg-button-green text-white self-center outline-none">
              View Savings{" "}
              <img src={Arrow} alt="right arrow" className="ml-2" />
            </button>
          </div>
          <div>
            <h2 className="mt-8 font-bold text-2xl">Real-time Assistant</h2>
            <div className="flex mt-4">
              <div className="text-sm text-main-blue font-bold underline underline-offset-[6px] decoration-2">
                On-going Tx
              </div>
              <div className="text-sm ml-10 text-dark-gray-text font-semibold">
                Authorize Tx
              </div>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between py-2 border-b-2 border-gray-border">
                <div className="flex flex-col">
                  <p className="font-bold text-xl">$1000</p>
                  <p className="text-xs">Processing</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
              </div>
              <div className="flex items-center justify-between py-2 border-b-2 border-gray-border">
                <div className="flex flex-col">
                  <p className="font-bold text-xl">$1000</p>
                  <p className="text-xs">Completed</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-button-green"></div>
              </div>
              <div className="flex items-center justify-between py-2 border-b-2 border-gray-border">
                <div className="flex flex-col">
                  <p className="font-bold text-xl">$1000</p>
                  <p className="text-xs">Completed</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-button-green"></div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex flex-col">
                  <p className="font-bold text-xl">$1000</p>
                  <p className="text-xs">Completed</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-button-green"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview