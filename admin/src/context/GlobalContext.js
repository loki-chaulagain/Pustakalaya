import { createContext } from "react";
import { toast } from "react-hot-toast";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const deleteSuccessToast = () => toast(" ✅ Delete Success");
  const updateSuccessToast = () => toast(" ✅ Update Success");
  const createSuccessToast = () => toast(" ✅ Create Success");
  const somethingWentWrongToast = () => toast(" ❌ Something Went Wrong");
  return <GlobalContext.Provider value={{ deleteSuccessToast, somethingWentWrongToast, createSuccessToast, updateSuccessToast }}>{children}</GlobalContext.Provider>;
};
