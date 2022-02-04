import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ text, size }) => {
  return (
    <>
      {size === "small" && <Small>{text}</Small>}
      {size === "medium" && <Medium>{text}</Medium>}
      {size === "large" && <Large>{text}</Large>}
      {text === "로그아웃" && <Logout>{text}</Logout>}
    </>
  );
};

const Small = styled.button`
  width: 80px;
  background-color: var(--dark-orange-color);
  font-size: 16px;
`;

const Medium = styled.button`
  width: 125px;
  border-radius: 20px;
  background-color: var(--dark-orange-color);
  color: var(--white-color);
  font-size: 18px;
`;

const Large = styled.button`
  width: 150px;
  border-radius: 24px;
  background-color: var(--dark-orange-color);
  color: var(--white-color);
  font-size: 20px;
`;

const Logout = styled.button`
  border-bottom: 2px solid var(--black-color);
  color: var(--black-color);
  font-size: 20px;
  font-weight: bold;
`;

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
