import React from 'react';
import {
  AttributeSet,
  AttributeColor,
  AttributeItem,
  AttributeLabel
} from './AttributesList.styled';

export class AttributesList extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <>
        {product.attributes &&
          product.attributes.map((attribute) => (
            <div key={attribute.id}>
              <AttributeLabel>{attribute.name}:</AttributeLabel>
              <AttributeSet>
                {attribute.type === 'swatch'
                  ? attribute.items.map((item) => (
                      <AttributeColor
                        key={item.id}
                        style={{
                          background: `${item.value}`
                        }}
                      ></AttributeColor>
                    ))
                  : attribute.items.map((item) => (
                      <AttributeItem key={item.id}>{item.value}</AttributeItem>
                    ))}
              </AttributeSet>
            </div>
          ))}
      </>
    );
  }
}
