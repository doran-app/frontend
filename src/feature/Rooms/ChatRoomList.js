import React from "react";

import styled from "styled-components";
import card1 from "../../assets/cards/card1.png";
import card2 from "../../assets/cards/card2.png";
import card3 from "../../assets/cards/card3.png";
import card4 from "../../assets/cards/card4.png";
import card5 from "../../assets/cards/card5.png";
import card6 from "../../assets/cards/card6.png";

const ChatRoomList = () => {
  const ChatRoomContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(100px, auto));
    gap: 10px;
    width: 90%;

    img {
      width: 100%;
    }
  `;

  const ChatRoom = styled.div`
    border: 1px solid #333;
    border-radius: 15px;
    overflow: hidden;

    h1 {
      margin: 3px 0 15px 0;
      border-bottom: 1px solid #333;
    }
  `;

  const TextContent = styled.div`
    padding: 15px;
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, minmax(auto));
      gap: 10px;
    }
    li {
      display: grid;
      gap: 10px;
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
  return (
    <>
      <ChatRoomContainer>
        <ChatRoom>
          <img src={card1} />
          <TextContent>
            <RoomNumber>01</RoomNumber>
            <h1>김필순님의 방</h1>
            <ul>
              <li>김필순</li>
            </ul>
          </TextContent>
        </ChatRoom>
        <ChatRoom>
          <img src={card2} />
          <TextContent>
            <RoomNumber>02</RoomNumber>
            <h1>김순이님의 방</h1>
            <ul>
              <li>김순이</li>
              <li>김필순</li>
            </ul>
          </TextContent>
        </ChatRoom>
        <ChatRoom>
          <img src={card3} />
          <TextContent>
            <RoomNumber>03</RoomNumber>
            <h1>이영자님의 방</h1>
            <ul>
              <li>이영자</li>
              <li>이영자</li>
              <li>이영자</li>
              <li>이영자</li>
            </ul>
          </TextContent>
        </ChatRoom>

        <ChatRoom>
          <img src={card4} />
          <TextContent>
            <RoomNumber>04</RoomNumber>
            <h1>진국님의 방</h1>
            <ul>
              <li>진국</li>
            </ul>
          </TextContent>
        </ChatRoom>
        <ChatRoom>
          <img src={card5} />
          <TextContent>
            <RoomNumber>05</RoomNumber>
            <h1>박철수님의 방</h1>
            <ul>
              <li>박철수</li>
              <li>박철수</li>
              <li>박철수</li>
            </ul>
          </TextContent>
        </ChatRoom>
        <ChatRoom>
          <img src={card6} />
          <TextContent>
            <RoomNumber>06</RoomNumber>
            <h1>박철수님의 방</h1>
            <ul>
              <li>박철수</li>
              <li>박철수</li>
              <li>박철수</li>
            </ul>
          </TextContent>
        </ChatRoom>
      </ChatRoomContainer>
    </>
  );
};

export default ChatRoomList;
