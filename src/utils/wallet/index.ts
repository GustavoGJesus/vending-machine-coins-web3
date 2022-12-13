import Web3 from "web3";

declare var window: any;

export const connectWalletHandler = () => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts" });
    const web3 = new Web3(window.ethereum);
    console.log("teste")
  } else {
    console.log("connect wallet please");
  }
};
