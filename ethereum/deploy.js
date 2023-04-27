const HDWalletPrrovider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const dotenv = require('dotenv');

dotenv.config();

const provider = new HDWalletPrrovider({
    mnemonic: 'upon kitten festival odor favorite wire ugly tray report debris adjust poverty',
    providerOrUrl: 'https://sepolia.infura.io/v3/cfade74526c74659bafdeed17b78f08c'
});

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account' , accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({gas : '1000000' , from : accounts[0]});

    console.log('Contract deployed to', result.options.address);

    provider.engine.stop(); 
};
deploy();

