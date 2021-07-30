import { ERC20_ABI, XYZ_ADDRESS } from "./config";

const Web3 = require("web3");

const web3 = new Web3("http://localhost:8545");

const xyzToken = new web3.eth.Contract(ERC20_ABI, XYZ_ADDRESS);

const senderAddress = "0xA5FAE985c5890bC42f5c00d3bc8b2732E8065179";

xyzToken.methods.balanceOf(senderAddress).call((err: any, res: any) => {
  if (err) {
    console.log("An error occured", err);
    return;
  }
  console.log("The balance is: ", res);
});
