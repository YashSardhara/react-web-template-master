import moment from "moment";
// eslint-disable-next-line import/no-extraneous-dependencies
import mergeWith from "lodash/mergeWith";
import { window } from "global";

// returns a negative number for dates that have already passed
export const daysBetween = (futureDate) => {
  const tmpFuture = futureDate.slice(0, 10).split("-");
  return Math.floor(
    (new Date(tmpFuture[0], tmpFuture[1] - 1, tmpFuture[2]) - new Date()) / (1000 * 60 * 60 * 24),
  );
};

export function getMobileWebOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  }

  return "";
}

// returns a negative number for furtureDates that have already passed
export const daysUntil = (futureDate, currentDate) => {
  if (currentDate) {
    return moment(futureDate).diff(moment(currentDate, "days")) + 1;
  }
  return moment(futureDate).diff(moment(), "days") + 1;
};

export const isMobileWeb = () => {
  let check = false;
  const a = navigator.userAgent || navigator.vendor || window.opera;
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      a,
    ) ||
    // eslint-disable-next-line no-useless-escape
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a?.substr(0, 4),
    )
  ) {
    check = true;
  }
  return check;
};

export const getWebOS = () => {
  if (navigator?.platform && navigator?.platform?.indexOf("iPhone") !== -1) return "ios";
  return "android";
};

// number, decimals - use math.floor to account for incorrect Javascript math
export const convertToUploadNum = (n = 0, d = 4) => Math.round(n * 10 ** d);

// TODO - update invocations of convertToUploadNum to use this instead
export const convertToMinDenomination = (n = 0, d = 4) => convertToUploadNum(n, d);

export const displayNum = (n = 0, d = 4) => n / 10 ** d;

export async function replaceAsync(str, regex, asyncFn) {
  const promises = [];
  str.replace(regex, (match, ...args) => {
    const promise = asyncFn(match, ...args);
    promises.push(promise);
  });
  const data = await Promise.all(promises);
  return str.replace(regex, () => data.shift());
}

// generate random string - IE kd3unxvoktjvh69md3icp
export const randomString = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// merge N arrays into a single array with no duplicates
export function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    if (array) {
      jointArray = [...jointArray, ...array];
    }
  });
  const uniqueArray = jointArray.filter((item, index) => jointArray.indexOf(item) === index);
  return uniqueArray;
}

// eslint-disable-next-line consistent-return
export function customizer(objValue, srcValue, key) {
  if (Array.isArray(objValue)) {
    if (key === "media") {
      return mergeMediaArarys(objValue, srcValue);
    }
    return mergeArrays(objValue, srcValue);
  }
}

export function entityMerge(target, source) {
  return mergeWith(target, source, customizer);
}

// create a application/x-www-form-urlencoded compliant url
export function createFormURL(values) {
  const formBody = [];
  Object.keys(values).forEach((key) => {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(values[key]);
    formBody.push(`${encodedKey}=${encodedValue}`);
  });
  return formBody.join("&");
}

export const openLink = (link, newTab = false) => {
  if (isWeb()) {
    if (newTab) {
      window.open(link);
      return;
    }
    window.location.href = link;
    return;
  }

  Linking.canOpenURL(link).then((supported) => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.error("Don't know how to open URI: ", link);
    }
  });
};

// force url to use https
export const withHttp = (url) => {
  return !/^https?:\/\//i.test(url) ? `https://${url}` : url;
};

export const makeAuthToken = (accessToken) => {
  return `Bearer ${accessToken}`;
};

export const isJSON = (contentType) => {
  const i = contentType.indexOf("application/json");
  return i !== -1;
};

export const getQueryParams = (url) => {
  const params = url.split("?");
  if (params.length === 2) {
    const split = params[1].split("&");
    return split.reduce((acc, curr) => {
      const [key, value] = curr.split("=");
      acc[key] = value.replace("%20", " ");
      return acc;
    }, {});
  }
  return {};
};

export const dateDiff = (startDate, endDate) => {
  return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
};

// source: https://github.com/moment/moment/issues/959#issuecomment-301767843
export function nearestFutureMinutes(interval, someMoment) {
  const roundedMinutes = Math.ceil(someMoment.minute() / interval) * interval;
  return someMoment.clone().minute(roundedMinutes).second(0);
}

export const webRedirect = (location) => {
  window.location.href = location;
};

export const arrayHas = (array, item) => {
  if (!array) return false;
  return array.indexOf(item) !== -1;
};

export const toSignificantDigits = (n, digits) => {
  const fallback = 0;
  if (!n) return fallback.toPrecision(digits);
  if (typeof n === "string") {
    return Number.parseFloat(n).toPrecision(digits);
  }
  return n.toPrecision(digits);
};

// change to significant decimals without roundoff
export const toSignificantDecimals = (n, digits = 2) => {
  const fallback = 0;
  const factor = Math.pow(10, digits);
  if (!n) return fallback.toFixed(digits);
  if (typeof n === "string") {
    return Math.floor(Number.parseFloat(n) * factor) / factor;
  }
  return Math.floor(n * factor) / factor;
};

export const toFixed = (n, digits = 2) => {
  const fallback = 0;
  if (!n) return fallback.toFixed(digits);
  if (typeof n === "string") return Number(n).toFixed(digits);
  return n.toFixed(digits);
};

export const commafy = (n, digits = 2) => {
  const fallback = 0;
  if (!n) return fallback.toFixed(digits);

  const handleOutput = (num) =>
    num.toLocaleString(undefined, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    });

  if (typeof n === "string") {
    return handleOutput(Number(n));
  }
  return handleOutput(n);
};

export function throttle(limit) {
  let lastRan = null;

  const invoke = (cb) => {
    cb();
    lastRan = Date.now();
  };

  return (cb) => {
    if (!lastRan) {
      invoke(cb);
    } else if (Date.now() - lastRan >= limit) {
      invoke(cb);
    }
  };
}

export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const displayPhone = (phoneNumber) => {
  if (typeof phoneNumber !== "string") return "";
  return `********${phoneNumber.slice(phoneNumber.length - 2)}`;
};

export const toLower = (str) => {
  if (!str || typeof str !== "string") return "";
  return str.toLowerCase();
};

export const getPercentColor = (n) => {
  if (n === 0) return "black";
  if (n > 0) return "green";
  return "red";
};

export const convertToBase64 = (event, callback) => {
  // eslint-disable-next-line no-undef
  const reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onloadend = function () {
    let base64data = reader.result;
    callback(base64data);
  };
};
