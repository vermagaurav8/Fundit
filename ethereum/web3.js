import Web3 from "web3";

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
}else{
    const provider = new Web3.providers.HttpProvider(
        'https://sepolia.infura.io/v3/cfade74526c74659bafdeed17b78f08c',
    );

    web3 = new Web3(provider);
}

export default web3;