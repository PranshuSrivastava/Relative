import Card from "./components/UI/Card";

const Coins = [
  {
    title: "Bitcoin(BTC)",
    price: 31912.8,
    profit: 10,
    TVL: 60000,
    num: 1,
    symbol: "Bitcoin.png",
    pairs: {
      firstPair: "SolanaS.png",
      secondPair: "EthereumS.png",
      thirdPair: "BinanceS.png",
    },
  },
  {
    title: "Solana(SOL)",
    price: 32.83,
    profit: -12.32,
    TVL: 60000,
    num: 2,
    symbol: "Solana.png ",
    pairs: {
      firstPair: "BitcoinS.png",
      secondPair: "EthereumS.png",
      thirdPair: "BinanceS.png",
    },
  },
  {
    title: "Ethereum(ETH)",
    price: 1466.45,
    profit: -11.93,
    TVL: 60000,
    num: 3,
    symbol: "Ethereum.png",
    pairs: {
      firstPair: "SolanaS.png",
      secondPair: "BitcoinS.png",
      thirdPair: "BinanceS.png",
    },
  },
  {
    title: "Binance USD(BUSD)",
    price: 1.0,
    profit: 0.26,
    TVL: 60000,
    num: 4,
    symbol: "Binance.png",
    pairs: {
      firstPair: "SolanaS.png",
      secondPair: "EthereumS.png",
      thirdPair: "BinanceS.png",
    },
  },
  {
    title: "Shiba Inu(SHIB)",
    price: 0.00000001948,
    profit: -8.1,
    TVL: 60000,
    num: 5,
    symbol: "SHIBA.png",
    pairs: {
      firstPair: "SolanaS.png",
      secondPair: "EthereumS.png",
      thirdPair: "BinanceS.png",
    },
  },
];

function App() {
  return (
    <div className="bg-color3 h-screen w-screen  flex flex-col font-Tomorrow text-base align-center justify-center">
      <div className="relative flex flex-row justify-center items-center w-[200px]">
        <div className=" w- [13px] h-[13px] bg-black">
          <img src="activity.png" alt="activity" />
        </div>

        <h2 className="text-whiteText w-[146px] h-[32px] flex justify-center items-center text-[1rem]">
          Trending assets
        </h2>
      </div>
      <div className="w-screen flex flex-row justify-around items-center">
        {Coins.map((coin) => {
          return (
            <Card
              title={coin.title}
              price={coin.price}
              profit={coin.profit}
              TVL={coin.TVL}
              num={coin.num}
              symbol={coin.symbol}
              pairs={coin.pairs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
