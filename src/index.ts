import dotenv from "dotenv";

dotenv.config();

export const healthCheck = () => {
  return "OK";
};

console.log("Device Monitoring API running");