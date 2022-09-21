import md5 from "blueimp-md5";
import { publicKey, privateKey } from '@env';
// TimeStamp
const ts = Date.now();

// Hash Md5
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiParams = { 
  ts,
  apikey: publicKey,
  hash,
  baseURL: 'https://gateway.marvel.com'
};
export default apiParams;