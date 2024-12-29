import styled from 'styled-components';

const S = {
  Container: styled.div`
    width: 20rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 3rem;
    border: 3px solid #999999;
    border-radius: 1rem;
    color: #999999;
    cursor: pointer;
    &:hover {
      background-color: #66666620;
      color: #333333;
      border-color: #333333;
      box-shadow: 0 0.5rem 0.5rem 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  `,
};

interface Props {
  onClick: () => void;
}

function CreationItem({ onClick }: Props) {
  return (
    <S.Container onClick={onClick}>+</S.Container>
  );
}

export default CreationItem;
