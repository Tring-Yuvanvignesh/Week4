import React, { useState } from "react";
import CreateComponent from "./Components/Create/CreateComponent";
import ReadComponent from "./Components/Read/ReadComponent";
import UpdateComponent from "./Components/Update/UpdateComponent";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
      <>
        <ReadComponent onRefresh={handleRefresh}/>
      </>
  );}

export default App;
