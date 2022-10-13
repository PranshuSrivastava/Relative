import { FC } from "react";
import Gulf from "./Gulf";
interface Details {
  title: string;
  price: number;
  profit: number;
  TVL: number;
  num: number;
  symbol: string;
  pairs: {
    firstPair: string;
    secondPair: string;
    thirdPair: string;
  };
}
function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const Card: FC<Details> = ({
  title,
  price,
  profit,
  TVL,
  num,
  symbol,
  pairs,
}) => {
  return (
    <div className="w-[290.74px] h-[350.08px] text-defaultFont font-semibold">
      <div className="rounded-full bg-color1 h-28 w-28 relative left-[5.9rem] top-[4.3rem]  z-20 flex flex-col justify-center items-center">
        <img src={symbol} alt="Symbol" />
      </div>
      <div className="flex flex-col justify-center items-center h-5 ">
        <Gulf num={num} />
      </div>
      <div className=" bg-color1  h-[350.08px] w-[290.74px]   rounded-3xl flex flex-col justify-center items-center">
        <span className="text-defaultText w-56 h-9 text-center text-xs leading-8">
          {title}
        </span>
        <div className="bg-color3  text-center w-60 h-8 space-x-1 rounded-xl justify-between items-center flex ">
          <span className="text-whiteText w-[145px] flex justify-end">
            ${numberWithCommas(price)}
          </span>
          <span
            className={`relative right-[1px] flex justify-end items-center text-xs ${
              profit > 0 ? `text-positive` : `text-negative`
            }  w-[68.52px] h-[31px]  `}
          >
            {profit}%
          </span>
        </div>
        <span className="text-defaultText text-center text-xs leading-8 w-56 h-9 flex justify-center relative items-center">
          Price
        </span>
        <div className="bg-color3 text-whiteText text-center w-60 h-8 space-x-1 rounded-xl flex items-center justify-center">
          <span>${numberWithCommas(TVL)}</span>
        </div>
        <span className="text-defaultText text-center text-xs leading-8 w-56 h-9 flex justify-center items-center">
          TVL
        </span>
        <div className="bg-color3 text-whiteText text-center  w-[7.5rem] h-[2.5rem] space-x-1 rounded-xl flex items-center justify-around">
          <img src={pairs.firstPair} alt="first source" />
          <img src={pairs.secondPair} alt="first source" />
          <img src={pairs.thirdPair} alt="first source" />
        </div>
        <span className="text-greyText text-xs leading-8">Popular Pairs</span>
      </div>
    </div>
  );
};

export default Card;
