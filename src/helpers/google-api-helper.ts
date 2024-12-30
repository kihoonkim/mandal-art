import {UserInfo} from "../states/login-state.ts";

const CLIENT_ID = '119665548039-i87rks0ik12i2jo9jeo2pc1mrv97trdf.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCscVRLye1LiQ5i44qhXIwPji2B0x2Utcs';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/people/v1/rest';
const SCOPES =
  'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
;

// https://developers.google.com/identity/protocols/oauth2?hl=ko

let loaded = false;
export async function initGoogleApis() {
  if(loaded) return;

  await loadGoogleApis()
  await loadGoogleAccounts()
  loaded = true
}

async function loadGoogleApis() {
  await loadScript("https://apis.google.com/js/api.js")

  // @ts-ignore
  const _gapi = gapi
  _gapi.load('client', () => {
    _gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
  });
}

export async function fetchGoogleUser(): Promise<UserInfo> {
  // @ts-ignore
  const _gapi = window.gapi

  // https://developers.google.com/people/api/rest/v1/people/get?hl=ko
  const response = await _gapi.client.people.people.get({
    'resourceName': 'people/me',
    'personFields': 'names,emailAddresses',
  })
  return {
    name: response.result.names?.at(0).displayName,
    email: response.result.emailAddresses?.at(0).value,
    token: '',
  }
}

export function setTokenOfLoginUser(token: string) {
  // @ts-ignore
  gapi.client.setToken(token)
}

export function clearTokenOfLoginUser() {
  // @ts-ignore
  const _gapi = window.gapi
  const token = _gapi.client.getToken();
  if (token !== null) {
    // @ts-ignore
    google.accounts.oauth2.revoke(token.access_token);
    _gapi.client.setToken('');
  }
}
async function loadGoogleAccounts() {
  await loadScript("https://accounts.google.com/gsi/client")

  // @ts-ignore
  window.tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: ''
  });
}


function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    document.body.appendChild(script);
  })
}
