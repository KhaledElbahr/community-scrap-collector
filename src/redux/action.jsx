import { HAS_LOGED } from "./actiontypes";

export const handleHasLoged = (payload) => ({
  type: HAS_LOGED,
  payload,
});
