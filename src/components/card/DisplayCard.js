import React, { useEffect, useState } from "react";

const DisplayCard = () => {
  const [userData, setUser] = useState();

  const getData = async () => {
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=50");
    setUser(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2> Developer Album</h2>
      <div className="container">
        {(userData || []).map((curElem, index) => {
          return (
            <div key={index + curElem.id} className="card-Ui">
              <div style={{ flexDirection: "row" }}>
                <h1>Profile</h1>
                <h5>{curElem.id}</h5>
              </div>
              <img style={{ height: "6rem", width: "auto" }} src={curElem.download_url} />
              <h3>Author: {curElem.author}</h3>
              <p>
                {`Height : ${curElem.height}`}, {`Width : ${curElem.width}`}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayCard;
