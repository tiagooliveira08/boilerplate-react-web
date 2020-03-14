import { createContext, useContext } from "react";
import * as stores from "./";

export class RootStore {
  public todoStore = new stores.TodoStore(this);
}

export const rootStoreProvider = new RootStore();

const rootStoreCtx = createContext(rootStoreProvider);

export function useStore() {
  return useContext(rootStoreCtx);
}
