import React, { useEffect, useState } from "react";
import { isDark } from "src/App";
import PropTypes from "prop-types";
import { NetworkManager } from "../../network/networkManager";
import { API } from "src/network";

const DisplayCard = ({ TitleName }) => {
  const [userData, setUser] = useState();

  // eslint-disable-next-line no-unused-vars
  const getData = async () => {
    // const response = await fetch("https://picsum.photos/v2/list?page=2&limit=50");
    // const response = await new NetworkManager(API.PHOTO);

    let PhotoApi = await new NetworkManager(API.PHOTO);
    const result = await PhotoApi.httpRequest(false)
    console.log(result)
    // setUser()
    // const data = await response.json();
    // console.log(`Here: ${data}`)
    setUser(result);
  };







  useEffect(() => {
    getData();
    // fetch(()=>  new NetworkManager(API.PHOTO))
    // .then(response => response.json())
    // .then(data => console.log(data.total));
  }, []);

  return (
    <>
      <isDark.Consumer>
        {(theme) => {
          return (
            <div className={`container${theme} mt-4`}>
              <h2> {TitleName}</h2>
              <div className={`container${theme}`}>
                {(userData || []).map((curElem, index) => {
                  return (
                    <div key={index + curElem.id} className={`card-Ui${theme}`}>
                      <div style={{ flexDirection: "row" }}>
                        <h1>Profile</h1>
                      </div>
                      <img style={{ height: "6rem", width: "auto" }} src={curElem.download_url} />
                      <h3>Author: {curElem.author}</h3>
                      {/* <h5>{curElem.id}</h5> */}
                      <p>
                        {`Height : ${curElem.height}`}, {`Width : ${curElem.width}`}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </isDark.Consumer>
    </>
  );
};
DisplayCard.propTypes = {
  TitleName: PropTypes.any,
};
export default DisplayCard;
