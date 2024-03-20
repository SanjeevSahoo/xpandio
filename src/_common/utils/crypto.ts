import CryptoJS from "crypto-js";
import { PUBLIC_CRYPTO_KEY } from "../constants";

export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    PUBLIC_CRYPTO_KEY
  ).toString();
};
export const decryptData = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, PUBLIC_CRYPTO_KEY);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    return null;
  }
};
