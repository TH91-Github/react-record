import React, { useCallback, useMemo, useState } from "react";


// Light = React.memo(Light);

function Test () {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  function Light({ room, on, toggle }) {
    console.log({ room, on });
    return (
      <button onClick={toggle}>
        {room} {on ? "💡" : "⬛"}
      </button>
    );
  }
  console.log("야호")
  const toggleMaster = useCallback(() => {
    console.log("침실")
    setMasterOn(!masterOn)
  },[masterOn]);
  const toggleKitchen = useCallback(() => {
    console.log("주방")
    setKitchenOn(!kitchenOn)
  },[kitchenOn]);
  const toggleBath = useCallback(() => {
    console.log("욕실")
    setBathOn(!bathOn)
  }, [bathOn]);

  return (
    <div className="velog">
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </div>
  )
}

export default Test;


