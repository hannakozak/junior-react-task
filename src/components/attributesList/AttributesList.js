import React from 'react';
import {
  AttributeSet,
  AttributeColor,
  AttributeItem,
  AttributeLabel
} from './AttributesList.styled';

export class AttributesList extends React.Component {
  render() {
    const { product, handleInput } = this.props;
    return (
      <>
        {product.attributes &&
          product.attributes.map((attribute) => (
            <div key={attribute.id}>
              <AttributeLabel>{attribute.name}:</AttributeLabel>
              <AttributeSet onClick={handleInput}>
                {attribute.type === 'swatch'
                  ? attribute.items.map((item) => (
                      <AttributeColor
                        key={item.id}
                        style={{
                          background: `${item.value}`
                        }}
                        value={item.value}
                        name={attribute.name}
                      ></AttributeColor>
                    ))
                  : attribute.items.map((item) => (
                      <AttributeItem
                        key={item.id}
                        value={item.value}
                        name={attribute.name}
                      >
                        {item.value}
                      </AttributeItem>
                    ))}
              </AttributeSet>
            </div>
          ))}
      </>
    );
  }
}
