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
  background: var(--dark-orange-color);
`;

const Medium = styled.button`
  width: 125px;
  background: var(--dark-orange-color);
  border-radius: 20px;
  color: var(--white-color);
  font-size: 18px;
`;

const Large = styled.button`
  width: 150px;
  background: var(--dark-orange-color);
  border-radius: 24px;
  font-size: 20px;
  color: var(--white-color);
`;

const Logout = styled.button`
  border-bottom: 2px solid var(--black-color);
  font-size: 20px;
  font-weight: bold;
  color: var(--black-color);
`;

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
