import CryptoJS from "crypto-js";

const SECRET_KEY = "myitronline_news_super_duper_key";

export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        SECRET_KEY
    ).toString();
};

export const decryptData = (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return decrypted ? JSON.parse(decrypted) : null;
}