import { useState } from "react";
import items from "../../data";
import { IconContext } from "react-icons";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { PiHeartStraightFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";

export default function Card() {
  const [likedCards, setLikedCards] = useState(Array(items.length).fill(false));

  const handleLike = (index) => {
    const updatedLikedCards = [...likedCards];
    updatedLikedCards[index] = !updatedLikedCards[index];
    setLikedCards(updatedLikedCards);
  };

  return items.map((item, index) => {
    return (
      <div key={index} className="relative cursor-pointer w-[18rem] mx-auto">
        <a className="-z-20">
          {item.listings.map((listing, idx) => {
            const isLiked = likedCards[index];
            return (
              <div key={idx} className="relative">
                <div className="flex justify-center items-center relative">
                  <img
                    className="w-[17rem] h-[15.25em] rounded-xl object-cover"
                    src={listing.image}
                    alt={listing.location}
                  />
                  <div className="text-center flex justify-center items-center">
                    {isLiked ? (
                      <IconContext.Provider
                        value={{
                          color: "red",
                          className: "global-class-name",
                        }}
                      >
                        <button>
                          <PiHeartStraightFill
                            className=" text-white absolute top-2 right-4 w-6 h-6"
                            onClick={() => handleLike(index)}
                          />
                        </button>
                      </IconContext.Provider>
                    ) : (
                      <IconContext.Provider
                        value={{
                          color: "black",
                          className: "global-class-name ",
                        }}
                      >
                        <button>
                          <PiHeartStraightDuotone
                            className="text-white absolute top-2 right-4 w-6 h-6 "
                            onClick={() => handleLike(index)}
                          />
                        </button>
                      </IconContext.Provider>
                    )}
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex flex-row justify-between">
                    <p className="leading-5 tracking-wide text-sm font-medium">
                      {listing.location}
                    </p>
                    <div className="flex flex-row items-center justify-center gap-1">
                      <IoIosStar />
                      <p className="leading-5 tracking-wide text-sm font-normal">
                        {listing.rating}
                      </p>
                    </div>
                  </div>
                  <p className="leading-5 tracking-wide text-sm font-light opacity-60">
                    Feb 5-10
                  </p>
                  <p className="leading-5 tracking-wide text-sm font-light opacity-60">
                    {listing.distance} kilometers away
                  </p>
                  <div className="flex flex-row gap-1 mt-1">
                    <p className="leading-5 tracking-wide text-sm font-medium ">
                      {listing.price_per_night} $
                    </p>
                    <p className="leading-5 tracking-wide text-sm font-light mb-5">
                      night
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </a>
      </div>
    );
  });
}
