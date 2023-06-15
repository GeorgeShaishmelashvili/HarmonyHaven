import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: red;
  color: white;
  font-size: 20px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button visible={visible} onClick={scrollToTop}>
      <FaArrowUp />
    </Button>
  );
};

export default ScrollButton;
