import * as crypto from "crypto";

const generateNonce = () => crypto.randomBytes(128).toString("base64");

export default generateNonce;
