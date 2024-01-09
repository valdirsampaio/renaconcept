import "./styles/globalstyles.scss";
import React, { useContext } from "react";
import { Loading } from "./components/Loading";
import { RoutesMain } from "./router";
import { UserContext } from "./providers/UserContext";

function App() {

    const { loading } = useContext(UserContext);
  
    return (
      <>
        {loading ? <Loading /> : <RoutesMain />}
      </>
    )
  }
  
  export default App