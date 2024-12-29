import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import {createMandalArt, getMandalArtOfUser, ItemType} from "../../services/canvas-service.ts";
import CreationItem from "./CreationItem.tsx";
import PreviewItem from "./PreviewItem.tsx";
import {useRecoilValue} from "recoil";
import {loginUserInfo} from "../../states/login-state.ts";
import {newId} from "../../utils/id-generater.ts";

const S = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  `,
};

interface AppProps {
  email: string;
}

function MandalArtList({ email }: AppProps) {
  let navigate = useNavigate();
  const loginInfo = useRecoilValue(loginUserInfo)

  const [list, setList] = useState<ItemType[]>([]);

  useEffect(() => {
    getMandalArtOfUser(email).then(setList).catch(console.error);
  },[])

  const handleOnCreate = () => {
    if(!loginInfo) return

    const id = newId()
    createMandalArt(id, loginInfo.email, loginInfo.name, 'Mandalart', '').then(() => {
      navigate(`/${id}`)
    })
  }

  const handleOnClick = (id: string) => {
    navigate(`/${id}`)
  }
  return (
    <S.Container>
      <CreationItem onClick={handleOnCreate} />
      {list.map((item) => (<PreviewItem item={item} onClick={handleOnClick} key={item.id} />))}
    </S.Container>
  );
}

export default MandalArtList;
