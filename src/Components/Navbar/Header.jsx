import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Airbnblogo from "./Airbnblogo";
import { useState, useRef } from "react";
import HeaderButton from "./HeaderButton";
import Tab from "./Tab";
import items from "../../data";
import { v4 as uuidv4 } from "uuid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import LeftArrowHScroll from "./LeftArrowHScroll";
import RightArrowHScroll from "./RightArrowHScroll";
import { FaSearch } from "react-icons/fa";
import TopText from "./TopText";

export default function Header({ handleClick, menu, inputClick }) {
  const [selectedTab, setSelectedTab] = useState("Stays");
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedType, setSelectedType] = useState("Trending");
  const scrollContainerRef = useRef(null);

  const handleChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleClose = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleLeftArrowClick = (e) => {
    e.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400, // Adjust as needed
        behavior: "smooth",
      });
    }
  };

  const handleRightArrowClick = (e) => {
    e.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400, // Adjust as needed
        behavior: "smooth",
      });
    }
  };

  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    <header className="fixed z-20 flex flex-col bg-white w-svw">
      <TopText className="flex mx-auto" />
      <div className="flex flex-col border-b pl-20 pr-20 pb-3">
        <div className="flex flex-row items-center justify-between ">
          <div className="pr-10 cursor-pointer">
            <Airbnblogo />
          </div>
          <div className="flex flex-row pl-40 px-6">
            <HeaderButton
              isSelected={selectedTab === "Stays"}
              onSelect={() => handleSelect("Stays")}
              children={"Stays"}
            />
            <HeaderButton
              isSelected={selectedTab === "Experiences"}
              onSelect={() => handleSelect("Experiences")}
              children={"Experiences"}
            />
            <HeaderButton
              isSelected={selectedTab === "Online Experiences"}
              onSelect={() => handleSelect("Online Experiences")}
              children={"Online Experiences"}
            />
          </div>

          <div>
            <div className="flex flex-row pl-10 items-center mr-3">
              <button className="cursor-pointer hover:bg-gray-100 rounded-full p-0 px-4 py-2">
                <span className="tracking-tight text-sm text-nowrap">
                  Airbnb your home
                </span>
              </button>
              <button className="cursor-pointer hover:bg-gray-100 rounded-full p-0 px-4 py-2">
                <LanguageIcon />
              </button>
              <div
                className="ml-1 cursor-pointer flex flex-row items-center border-2 py-1 px-2 w-17 justify-center rounded-full hover:shadow-md transition-shadow delay-75"
                onClick={handleClick}
              >
                <MenuIcon className="mr-2" fontSize="small" />

                <AccountCircleIcon
                  className=" text-gray-500"
                  fontSize="large"
                />
              </div>
            </div>
            {menu && (
              <div className="fixed mt-3 bg-white right-[83px] shadow-lg w-64 rounded-xl z-20">
                <ul className="flex flex-col divide-y">
                  <div className="flex flex-col">
                    <a className="text-sm tracking-tight mt-2 p-3 w-full cursor-pointer hover:bg-[#F7F7F7]">
                      Sign Up
                    </a>
                    <a className="text-sm tracking-tight font-light opacity-75 mb-3 p-3 w-full cursor-pointer hover:bg-[#F7F7F7]">
                      Log in
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://www.airbnb.com/giftcards"
                      className="text-sm tracking-tight font-light opacity-75 mt-3 p-3 w-full cursor-pointer hover:bg-[#F7F7F7]"
                    >
                      Gift Cards
                    </a>
                    <a
                      href="https://www.airbnb.com/host/homes"
                      className="text-sm tracking-tight font-light opacity-75 p-3 w-full cursor-pointer hover:bg-[#F7F7F7]"
                    >
                      Airbnb your home
                    </a>
                    <a
                      href="https://www.airbnb.com/help"
                      className="text-sm tracking-tight font-light opacity-75 mb-3 p-3 w-full cursor-pointer hover:bg-[#F7F7F7]"
                    >
                      Help Center
                    </a>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center md:border-2 rounded-full shadow-xl text-xs">
            <div className="border-r hover:border-transparent cursor-pointer">
              <div className="hover:bg-[#EBEBEB] rounded-full px-8 py-3 w-72 tracking-normal">
                <div>Where</div>
                <input
                  onClick={handleClose}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 placeholder:text-sm placeholder:font-light cursor-pointer"
                  type="text"
                  placeholder="Search destinations"
                ></input>
              </div>
            </div>
            {selectedTab === "Experiences" ? (
              <div className="border-r hover:border-transparent cursor-pointer">
                <div className="hover:bg-[#EBEBEB] rounded-full px-8 py-3 w-[289px] tracking-normal ">
                  <div>Date</div>
                  <input
                    onClick={handleClose}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="cursor-pointer flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 placeholder:text-sm placeholder:font-light"
                    type="text"
                    placeholder="Add dates"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-row ">
                <div className="border-r hover:border-transparent cursor-pointer ">
                  <div className="hover:bg-[#EBEBEB] rounded-full py-3 pl-8 tracking-normal w-36 cursor-pointer">
                    <div>Check in</div>
                    <input
                      onClick={handleClose}
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="cursor-pointer flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 placeholder:text-sm placeholder:font-light"
                      type="text"
                      placeholder="Add dates"
                    />
                  </div>
                </div>
                <div className="border-r hover:border-transparent cursor-pointer">
                  <div className="hover:bg-[#EBEBEB] rounded-full py-3 px-8 w-36 tracking-normal ">
                    <div>Check out</div>
                    <input
                      onClick={handleClose}
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="cursor-pointer flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 placeholder:text-sm placeholder:font-light"
                      type="text"
                      placeholder="Add dates"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className=" hover:bg-[#EBEBEB] rounded-full px-8 py-2.5 tracking-normal flex flex-row justify-center items-center cursor-pointer ">
              <div className="flex flex-col items-start justify-center">
                <div className="">Who</div>
                <input
                  onClick={handleClose}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="cursor-pointer flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 placeholder:text-sm placeholder:font-light"
                  type="text"
                  placeholder="Add guests"
                />
              </div>
              <div className="cursor-pointer">
                <div className="relative left-6 flex justify-center items-center rounded-full border-none bg-[#FF385C] transition 500ms hover:bg-[#D70466] w-10 h-10 m-0 p-0 text-center">
                  <FaSearch className="w-4 h-4 p-0 m-0 border-none text-white" />
                </div>
              </div>
            </div>
          </div>
          {searchInput && (
            <DateRangePicker
              className="fixed z-20 top-56 shadow-lg "
              rangeColors={["#FD5B61"]}
              minDate={new Date()}
              ranges={[selectionRange]}
              onChange={handleChange}
            />
          )}
        </div>
      </div>

      <div className="drop-shadow-sm shadow flex flex-row pr-28 pl-28 relative">
        <button
          className="transition-opacity ease-in absolute left-20 top-0 bottom-0 flex items-center justify-center z-10"
          onClick={handleLeftArrowClick}
        >
          <div>
            <LeftArrowHScroll fontSize="lar" className="opacity-50" />
          </div>
        </button>
        <div
          className="flex items-center flex-nowrap relative overflow-x-scroll no-scrollbar px-5 py-0 mb-0 w-auto mt-4 scroll-smooth justify-between"
          ref={scrollContainerRef}
        >
          {items.map((item) => {
            return (
              <Tab
                className={`${
                  selectedType === item.name
                    ? "flex flex-col items-center mx-4 pb-3 px-0 border-b-2 border-black cursor-default"
                    : "flex flex-col items-center mx-4 pb-3 px-0 border-b-2 border-transparent opacity-50 hover:border-b-2 hover:border-b-gray-400 transition 500ms hover:opacity-100"
                }`}
                handleSelectType={() => {
                  setSelectedType(`${item.name}`);
                }}
                key={uuidv4()}
                image={item.icon}
                tag={item.name}
              />
            );
          })}
        </div>
        <button
          className="absolute right-20 top-0 bottom-0 flex items-center justify-center z-10"
          onClick={handleRightArrowClick}
        >
          <div>
            <RightArrowHScroll className="opacity-50" />
          </div>
        </button>
      </div>
    </header>
  );
}
