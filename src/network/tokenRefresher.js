/**
 * @description This is an independent call to reduce cycle dependency
 * @description This call will refresh the expired token and will generate a new one
 */

 import { API } from "./endpoints";
 import { ServerConfig } from "./serverConfig";
 import appDispatcher  from "../redux/dispatchers/appDispatcher";
// import { RootNavigator } from "@navigators";

 export async function refreshToken(refreshToken) {
   try {
     const { endpoint, version, method } = API.AUTH.REFRESH_TOKEN;
     const url = `${ServerConfig.API_URL}/${version}${endpoint}`;
     const response = await fetch(url, {
       method,
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ refreshToken }),
     }).then((res) => res.json());
     if (response.success) {
      appDispatcher.updateUserTokens(response.data);
     } else {
      appDispatcher.setUserLoggedOut();
     //  RootNavigator.reset({ index: 0, routes: [{ name: "Login" }] });
     }
   } catch (err) {
     console.log(err);
   } finally {
    //  return
   }
 }