import styled from 'styled-components';
import {ItemType} from "../../services/canvas-service.ts";
import Thumbnail from '../../assets/thumbnail.png'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 15rem;
    border: 1px solid #999999;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      background-color: #66666620;
      color: #333333;
      border-color: #333333;
      box-shadow: 0 0.5rem 0.5rem 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  `,
  Image: styled.img`
    width: 100%;
    height: 75%;
    object-fit: cover;
    margin: 0;
    padding: 0;
  `,
  Info: styled.div`
    width: calc(100% - 2rem);
    height: 25%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-top: 1px solid #999999;
  `
};

interface Props {
  item: ItemType;
  onClick: (id: string) => void;
}

function PreviewItem({ item, onClick }: Props) {
  return (
    <S.Container onClick={() => onClick(item.id)}>
      <S.Image src={Thumbnail}/>
      <S.Info>
        {item.pageName} by {item.name}
      </S.Info>
    </S.Container>
  );
}

export default PreviewItem;
