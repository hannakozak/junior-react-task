import React from 'react';
import {
  AttributeSet,
  AttributeColor,
  AttributeItem,
  AttributeLabel
} from './MiniCartAttributes.styled';

export class MiniCartAttributesList extends React.Component {
  render() {
    const { product, handleInput } = this.props;

    return (
      <>
        {product.selectedAttributes &&
          product.attributes &&
          product.attributes.map((attribute) => (
            <div key={attribute.id}>
              <AttributeLabel>{attribute.name}:</AttributeLabel>
              <AttributeSet onClick={handleInput}>
                {attribute.type === 'swatch'
                  ? attribute.items.map((item) => (
                      <AttributeColor
                        key={item.id}
                        style={{
                          background: `${item.value}`,
                          outline:
                            product.selectedAttributes[attribute.name] ===
                            item.value
                              ? `double #5ECE7B`
                              : 'black',
                          borderColor:
                            product.selectedAttributes[attribute.name] ===
                            item.value
                              ? `#5ECE7B`
                              : 'black'
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
                        style={{
                          background:
                            product.selectedAttributes[attribute.name] ===
                            item.value
                              ? 'black'
                              : 'white',
                          color:
                            product.selectedAttributes[attribute.name] ===
                            item.value
                              ? 'white'
                              : 'black'
                        }}
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
