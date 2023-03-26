import React, { FC, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";

declare global {
    interface Window {
      ethereum?: any;
  }
}

export async function ConnectWallet() {
    if (window.ethereum){
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts
        return address 
        console.log(address)
      } catch (error) {
        console.error(error);
      } 
    } else {
      // MetaMask가 설치되어 있지 않은 경우
      console.error('Please install MetaMask');
    }

}