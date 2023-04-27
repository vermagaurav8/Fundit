Fundit : Crowdfunding Platform Powered by Ethereum Blockchain
The Platform is live on Sepolia Test Network and available to use at : [fundit.heygaurav.me](https://fundit-one.vercel.app/)

## Problem Statement and Necessity 
Crowdfunding is one of the most popular ways to raise funds for any project, cause or for helping any individual in need. With the onset of Covid we have seen a rise in Crowdfunding activities across the globe which includes small campaigns to help people get oxygen and medical help to large funds such as PM Cares.

The major problems with the Current Crowdfunding Platforms that I wanted to solve were : 
- Security : As the funds become larger, they need to be heavily secure, although stringent measures such as symmetric encryption are in place to make e-payment safe and secure,it is still vulnerable to hacking. Blockchain — which has never been compromised yet — can provide that level of security.
- Transparency and Anti-Fraud  : We have seen, and continue to see a lot of crowdfunding scams happening around. There is no way to see where the funds are being used. We wanted to make the entire flow of funds transparent at every stage, so that there is no possibility of the money being misused.
- Global contribution : With some of the platforms being country specific, it becomes hard for people from other countries to contribute to various campaigns. Using blockchain anyone in the world can contribute to the campaign. Transactions are quick and convenient.

## Tech Stack 
- Next JS
- Mocha
- Solidity
- Web3.js

## To run the application locally
- Fork the Project 
- run `npm install` to install all the dependencies
- run `npm run dev` to run the application locally

## Prerequisites to create Campaign and Contribute
1. Install **Metamask** as Google Chrome Extension and Create an account.
2.  Request Ether by sharing your ethereum address in social media <br>(https://sepoliafaucet.com/)`

## To Deploy your own Contract 
1. Create an account in [https://infura.io](https://infura.io/)
2. Create your mnemonic and infura endpoint in ethereum/deploy.js.
3. Do the Changes that you want to do inside the Solidity File
4. Compile the Contract 
  `node compile.js`
5. Deploy Contract by going into ethereum Directory and run.
	`node deploy.js`
	
   Copy the contract deploy address and replace it in factory.js file.
  
  
6. Replace your "infura end point link" in web3.js file


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
