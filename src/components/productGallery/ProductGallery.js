import React from 'react';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import { fetchProduct, selectPhoto } from '../../features/product/productSlice';
import {
  GalleryWrapper,
  Thumbnails,
  SelectedPhoto
} from './ProductGallery.styled';

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(photo) {
    this.props.selectPhoto(photo);
  }

  render() {
    return (
      <GalleryWrapper>
        {this.props.fetchProductStatus === 'SUCCESS' && (
          <Thumbnails>
            {this.props.product.gallery.map((image) => (
              <img
                key={image}
                src={image}
                onClick={() => this.handleChange(image)}
              />
            ))}
          </Thumbnails>
        )}
        <SelectedPhoto>
          {this.props.selectedPhoto && <img src={this.props.selectedPhoto} />}
        </SelectedPhoto>
      </GalleryWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product.product,
  fetchProductStatus: state.product.fetchProductStatus,
  selectedPhoto: state.product.selectedPhoto
});

export default withParams(
  connect(mapStateToProps, { fetchProduct, selectPhoto })(ProductGallery)
);
