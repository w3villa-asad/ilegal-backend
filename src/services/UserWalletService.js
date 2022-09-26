// import { UserWallet } from "../db/models/BlockchainSchema";
// // import { Rewards } from "../db/models/Reward";
// import {
//   getBalanceOfUser,
//   getEthBalanceOfUser,
// } from "../contracts/web3_functions/getBalance";
// // import { AppError } from "../helpers/error";
// import { encrypt } from "../contracts/web3_functions/encrypt";
// import { decrypt } from "../contracts/web3_functions/decrypt";
// import { send_token } from "../contracts/web3_functions/transferQanoon";
// import { transferQanoon } from "../contracts/web3_functions/transferQanoon";

const ethers = require("ethers");

const createWallet = async (req, res) => {
  try {
    // let walletFound = await UserWallet.findOne({ User_id: req.user.id });
    // if (walletFound) {
    //   res.status(409).json({
    //     success: false,
    //     message: "wallet already exist!",
    //     data: walletFound,
    //   });
    // } 
    // else {
      console.log("i ma in the createWalte")
      const wallet = ethers.Wallet.createRandom();
      // const encryptedPrivateKey = encrypt(wallet.privateKey);
      // const userWallet = new UserWallet({
      //   User_id: req.user.id,
      //   address: wallet.address,
      //   private_key: encryptedPrivateKey,
      // });
      // await userWallet.save();
      res.status(200).json({
        success: true,
        message: "wallet created successfully!",
        data: wallet,
      });
    // }
  } 
  catch (error) {
    throw new Error(error);
  }
};

const getEthBalance = async (req, res) => {
  try {
    if (req.user.id) {
      // let userWallet = await UserWallet.findOne({ User_id: req.user.id });
      console.log("new")
      const userEthBalance = await getEthBalanceOfUser(userWallet.address);
      // return userBalance;
      res.status(200).json({
        succes: true,
        message: "user Ether balance is " + userEthBalance,
        data: userEthBalance,
      });
    } 
    else {
      res.status(200).json({
        succes: true,
        message: "please provide user",
        data: userEthBalance,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};
// exports.getBalance = async (req, res) => {
//   try {
//     let userWallet = await UserWallet.findOne({ User_id: req.user.id });
//     const userQanoonBalance = await getBalanceOfUser(userWallet.address);
//     res.status(200).json({
//       success: true,
//       message: "user Wallet balance is " + userQanoonBalance,
//       data: userQanoonBalance,
//     });
//   } catch (error) {
//     throw new Error(error);
//   }
// };

  // exports.transfer_QAN = async (req, res) => {
  //   try {
  //     let { tokenValue, reciever } = req.body;
  //     if (!tokenValue) {
  //       res.status(200).json({
  //         success: false,
  //         message: "please provide token value",
  //       });
  //     }

  //     if (!reciever) {
  //       res.status(200).json({
  //         success: false,
  //         message: "please provide token value",
  //       });};
  //       {
  //       console.log("inside service ");
  //       let userWallet = await UserWallet.findOne({ User_id: req.user.id });
  //       console.log("after finding userWallet",userWallet);
  //       let userWalletKey = decrypt(userWallet.private_key);
  //       let transaction = await transferQanoon(
  //         tokenValue,
  //         reciever,
  //         userWalletKey
  //       );
  //       console.log("after the transaction in service");
  //       res.status(200).json({
  //         success: true,
  //         message: "transfer success",
  //         data: transaction,
  //       });
  //     }
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

module.exports = {
  createWallet,
  getEthBalance
} 