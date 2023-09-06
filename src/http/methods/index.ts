import { api } from "../api";
import { CreateAccount, LogIn } from "./types";

async function createAccount(data: CreateAccount) {
  return await api.post("/user", { ...data });
}

async function logIn(data: LogIn) {
  return await api.post("/authenticate", { ...data });
}

export const apiRequest = {
  createAccount,
  logIn,
};
