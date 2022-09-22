import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    width: 8rem;
    height: 9rem;
    object-fit: cover;
    padding-bottom: 2rem;
  }
`;

export const SelectedPhoto = styled.div`
  width: 71rem;
  height: 55rem;
  padding: 0 5rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
