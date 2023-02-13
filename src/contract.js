import Web3 from "web3";
import FilmDAO from "./FilmDAO.json"
  const ethereum = window.ethereum;

  const web3 = new Web3(ethereum);

  // const ContractAddress = FilmDAO.networks["5777"].address;
  // 0x32E196677dc2F48118c6820dB26076af905D5a4c
  // const ContractAddress = '0x8d6192DDC0aE82323f231eEf932dC9c4952Ad4cA';
  const ContractAddress = '0x0c9754b64d8cCA51c36d0D297d0F6c2Eb73728b7';
  const ContractAbi = FilmDAO;

  const myContract = new web3.eth.Contract(
    ContractAbi,
    ContractAddress
  );

  export default myContract;