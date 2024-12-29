import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {useEffect} from "react";
import {initGoogleApis, setTokenOfLoginUser} from "./helpers/google-api-helper.ts";
import {initFirebase} from "./helpers/firebase-helper.ts";
import {RecoilRoot} from "recoil";
import RecoilNexus from "recoil-nexus";
import Home from "./pages/Home.tsx";
import MandalArtHome from "./pages/MandalArtHome.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import {loadLoginInfo} from "./services/user-service.ts";

function App() {
  useEffect(() => {
    const userInfo = loadLoginInfo()
    initGoogleApis().then(() => {
      initFirebase()
      if (userInfo) {
        setTokenOfLoginUser(userInfo.token);
      }
    })
  }, [])

  return (
    <RecoilRoot>
      <RecoilNexus />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/errors" element={<ErrorPage />} />
          <Route path="/:id" element={<MandalArtHome />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
