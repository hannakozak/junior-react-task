import React from 'react';
import {
  SliderWrapper,
  SelectedPhoto,
  Icon,
  ArrowIcons
} from './ProductSlider.styled';
import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

export class ProductSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photoIndex: 0 };

    this.moveToNextPhoto = this.moveToNextPhoto.bind(this);
    this.moveToPreviousPhoto = this.moveToPreviousPhoto.bind(this);
  }
  moveToNextPhoto() {
    this.setState((prevState) => ({
      photoIndex:
        prevState.photoIndex < this.props.gallery.length - 1
          ? prevState.photoIndex + 1
          : 0
    }));
  }

  moveToPreviousPhoto() {
    this.setState((prevState) => ({
      photoIndex:
        prevState.photoIndex > 0
          ? prevState.photoIndex - 1
          : this.props.gallery.length - 1
    }));
  }

  render() {
    const { gallery } = this.props;
    return (
      <SliderWrapper>
        <SelectedPhoto>
          <img src={gallery[this.state.photoIndex]} />
        </SelectedPhoto>
        {gallery.length > 1 && (
          <ArrowIcons>
            <Icon>
              <img
                src={arrowLeft}
                alt="arrow left"
                onClick={this.moveToPreviousPhoto}
              />
            </Icon>
            <Icon>
              <img
                src={arrowRight}
                alt="arrow right"
                onClick={this.moveToNextPhoto}
              />
            </Icon>
          </ArrowIcons>
        )}
      </SliderWrapper>
    );
  }
}
