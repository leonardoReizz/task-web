import { api } from "../api";
import { CreateAccount } from "./types";

async function createAccount(data: CreateAccount) {
  return await api.post("/user", { ...data });
}

export const apiRequest = {
  createAccount,
};
