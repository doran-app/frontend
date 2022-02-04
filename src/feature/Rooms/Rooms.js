import React from "react";
import MainHeader from "../Rooms/MainHeader";
import ChatRoomList from "../Rooms/ChatRoomList";

import styled from "styled-components";

const Rooms = () => {
  return (
    <Entry>
      <MainHeader />
      <MainBody>
        <button>🔙</button>
        <ChatRoomList />
        <button>🔜</button>
      </MainBody>
    </Entry>
  );
};

const Entry = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f6f8f9;
`;

const MainBody = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export default Rooms;
