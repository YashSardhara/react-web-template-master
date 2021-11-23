import React, { useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [userData, setUser] = useState();

  const getData = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=50");

    // const response2 = await response.json();
    // console.log(response2)

    setUser(await response.json());
  };

  // console.log(userData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2> list of data</h2>
      <div className="container">
        {(userData || []).map((curElem, index) => {
          return (
            <div key={index + curElem.id} className="card">
              {/* <h3>{curElem.title}</h3>
              <h5>{curElem.id}</h5>
              <img style={{ width: "auto" }} src={curElem.thumbnailUrl} />
              <p>developer</p>
              <h1>developer</h1> */}
              <h1>Profile</h1>
              <h5>{curElem.id}</h5>
                  <img style={{ height: "10rem", width:'auto' }} src={curElem.download_url} />
              <h3>Author: {curElem.author}</h3>
              <p>{`Height : ${curElem.height}`}</p>
              <p>{`Width : ${curElem.width}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseEffectAPI;
