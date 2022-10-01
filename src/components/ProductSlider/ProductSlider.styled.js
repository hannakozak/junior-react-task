import styled from 'styled-components';

export const SliderWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 10rem;
`;

export const Icon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;

export const ArrowIcons = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 1rem;
  right: 11rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const SelectedPhoto = styled.div`
  min-width: 20rem;
  height: 28.8rem;
  text-align: center;
  & img {
    min-width: 20rem;
    height: 28.8rem;
    object-fit: cover;
  }
`;
