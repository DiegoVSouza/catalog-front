import { useEffect } from "react";
import './Stores.css'
import { Box } from "@chakra-ui/react";
import StoreModel from "../../../main/hooks/StoreModel";

export default function Stores() {

  const { Stores, getStores } = StoreModel()

  useEffect(() => {
    getStores()
  }, [])
  
  return (

    <main>
      <Box className="banner" height='10rem'>

      </Box>
    </main>
  );
}
