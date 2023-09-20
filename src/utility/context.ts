import { createContext,useContext } from "react";

interface contexType {
  username: string;
}

interface layoutType {
  footer: any | null;
  header: any | null;
}

//create context
export const LayoutContext = createContext<layoutType>({header:{},footer:{}});


// Custom hook to access the data
export const layoutData = () => {
    return useContext(LayoutContext);
  };