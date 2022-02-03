import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <>
      <ChatRoom>
        <img src="/assets/cards/card1.png" alt="image" />
        <TextContent>
          <RoomNumber>01</RoomNumber>
          <h1>김필순님의 방</h1>
          <ul>
            <li>김필순</li>
          </ul>
        </TextContent>
      </ChatRoom>
    </>
  );
};

const ChatRoom = styled.div`
  border: 1px solid #333;
  border-radius: 15px;
  overflow: hidden;

  h1 {
    margin: 3px 0 15px 0;
    border-bottom: 1px solid var(--dark-orange-color);
  }
`;

const TextContent = styled.div`
  padding: 15px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, minmax(25px, auto));
    gap: 10px;
  }

  li {
    width: 90%;
    padding: 3px;
    background-color: #fd8c61;
    border-radius: 15px;
    text-align: center;
  }
`;

const RoomNumber = styled.span`
  color: #fd8c61;
  font-weight: bold;
`;

export default Card;
