import React from "react";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <HeaderContainer>
      <RoomInfo>
        <button>새로고침</button>
        <h1>강남구 대치노인정</h1>
      </RoomInfo>
      <button>로그아웃</button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RoomInfo = styled.div`
  display: flex;

  h1 {
    margin: 0 10px;
  }
`;

export default MainHeader;
