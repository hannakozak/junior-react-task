import styled from 'styled-components';

export const SliderWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;

export const ArrowIcons = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 2rem;
  right: 1rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const SelectedPhoto = styled.div`
  width: 22rem;

  text-align: center;
  & img {
    width: 22rem;

    object-fit: cover;
  }
`;
