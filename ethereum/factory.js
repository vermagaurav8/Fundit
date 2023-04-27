import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x586Daa266E232e194f30eb79ffb9093BB3Fc2A77'
);

export default instance;