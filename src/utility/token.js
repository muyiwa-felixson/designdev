import Tokens from "./tokens.json";

export const core = Tokens.Core;
export const sys = Tokens.System;
export const dynamic = {
  light: Tokens.Light,
  dark: Tokens.Dark,
};

export const short = (mode, route) => {
  return getCoreValue(route.split(".").reduce((o, i) => o[i], dynamic[mode]));
};

export const getCoreValue = (string) => {
  string = string.replace("{", "").replace("}", "");
  return  string.split(".")[0] === 'core' ? string.split(".").reduce((o, i) => o[i], core) : string.split(".").reduce((o, i) => o[i], sys);
};
export const getSysValue = (string) => {
    string = string.replace("{", "").replace("}", "");
    return  string.split(".").reduce((o, i) => o[i], sys);
  };

export const getValue = (element) => {
  let result = element;
  if (element.includes("{")) {
    result = getCoreValue(`${element}`).value;
  }
  return result;
};
