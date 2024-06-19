import React from 'react';
import styled from 'styled-components';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isOn ? props.theme.colors.btn : "#ccc")};
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.3);
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${(props) => (props.isOn ? props.theme.colors.btn : "#ccc")};
  }

  &:checked + ${Slider}:before {
    transform: translateX(16px);
  }
`;

const Toggle = ({ isOn, handleToggle }) => {
  return (
    <Switch>
      <Input type="checkbox" checked={isOn} onChange={handleToggle} />
      <Slider isOn={isOn} />
    </Switch>
  );
};

export default Toggle;
