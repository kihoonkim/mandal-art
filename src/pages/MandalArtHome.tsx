import styled from 'styled-components';
import MandalartCanvas from "../components/canvas/MandalartCanvas.tsx";
import LogInIntentBanner from "../components/login/LogInIntentBanner.tsx";
import {useRecoilValue} from "recoil";
import {loginUserInfo} from "../states/login-state.ts";
import {useEffect, useRef, useState} from "react";
import {createMandalArt, getMandalArt, saveMandalArt} from "../services/canvas-service.ts";
import {useNavigate, useParams} from "react-router-dom";
import {newId} from "../utils/id-generater.ts";

const S = {
  Container: styled.div``,
};

function MandalArtHome() {
  const navigate = useNavigate();
  const param = useParams()
  const mandalartId = param.id || 'hello-world'
  const loginInfo = useRecoilValue(loginUserInfo)
  const [isOwner, setIsOwner] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [initialSnapshot, setInitialSnapshot] = useState<string|null>(null)
  const updatedSnapshot = useRef<string>('')
  const pageName = useRef<string>('Mandalart')

  useEffect(() => {
    if (mandalartId === 'hello-world') {
      if (loginInfo) {
        const id = newId()
        createMandalArt(id, loginInfo.email, loginInfo.name, pageName.current, updatedSnapshot.current).then(() => {
          navigate(`/${id}`)
        })
      } else {
        setLoaded(true)
      }
    } else {
      loadData()
    }
  }, [loginInfo])

  useEffect(() => {
    if (!loginInfo) return
    if (mandalartId === 'hello-world') return

    loadData() // login user is redirected from hello-world
  }, [param]);

  const loadData = ()=> {
    getMandalArt(mandalartId).then((doc: any) => {
      if (!doc.exists()) {
        navigate('/errors')
        return
      }
      const data = doc.data()
      setIsOwner(data.email === loginInfo?.email)
      setInitialSnapshot(data.snapshot)
      pageName.current = data.pageName
      updatedSnapshot.current = data.snapshot
      setLoaded(true)
    })
  }

  const handleOnChange = async (snapshot: string) => {
    updatedSnapshot.current = snapshot
    if (mandalartId !== 'hello-world') {
      await saveMandalArt(mandalartId, pageName.current, updatedSnapshot.current)
    }
  }
  const handleOnNameChange = async (name: string) => {
    pageName.current = name
    if (mandalartId !== 'hello-world') {
      await saveMandalArt(mandalartId, pageName.current, updatedSnapshot.current)
    }
  }

  if(!mandalartId) return <></>

  const temporary = mandalartId === 'hello-world'
  return (
    <S.Container>
      {temporary && <LogInIntentBanner />}
      {loaded && (
        <MandalartCanvas
          mandalartId={mandalartId}
          pageName={pageName.current}
          editable={temporary || isOwner}
          initialSnapshot={initialSnapshot}
          onChange={handleOnChange}
          onPageNameChange={handleOnNameChange}
        />
      )}
    </S.Container>
  );
}

export default MandalArtHome;
