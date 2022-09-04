import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const ModalBox = styled.div`
  max-width: calc(100vw - 300px);
  max-height: calc(100vh - 50px);
  background-color: white;
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  border-radius: 50%;
  background-color: #919297;
  color: black;
  display: flex;
  align-items: center;
  padding: 3px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
