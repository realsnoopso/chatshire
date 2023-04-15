declare global {
  interface Window {
    ethereum?: any;
  }
}

export const checkIsLogin = () => {
  if (window.ethereum) {
    return window.ethereum.selectedAddress;
  }
  return false;
};

export const getAccount = () => {
  if (window.ethereum) {
    return window.ethereum.selectedAddress;
  }
  return '';
};

export async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const address = accounts;
      if (address.length === 1) return String(address);
      return address;
    } catch (error: any) {
      return { status: 400, message: error.message };
    }
  } else {
    // MetaMask가 설치되어 있지 않은 경우
    return {
      status: 400,
      message:
        'Please install MetaMask wallet or access the service on a desktop browser.',
    };
  }
}
