import {setRecoil} from "recoil-nexus";
import {loginUserInfo} from "../states/login-state.ts";

export function loadLoginInfo() {
  const user = localStorage.getItem('user');
  if (user) {
    const userInfo = JSON.parse(user)
    setRecoil(loginUserInfo, userInfo);
    return userInfo
  }
  return null
}

export function saveLoginInfo(email: string, name: string, token: string) {
  localStorage.setItem('user', JSON.stringify({ email, name, token }));
  setRecoil(loginUserInfo, { email, name, token })
}

export function clearLoginInfo() {
  localStorage.removeItem('user');
  setRecoil(loginUserInfo, null)
}
