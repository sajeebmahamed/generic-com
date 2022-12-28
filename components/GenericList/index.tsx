import React from 'react'

interface IProps<T> {
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  items: T[];
} 

const GenericListBlock = <T extends unknown>({
  items,
  renderItem,
  keyExtractor
}: IProps<T>) => {
  return (
    <div>
      {
        items.map((item) => (
          <div key={keyExtractor(item)}>
            {renderItem(item)}
          </div>
        ))
        
      }
    </div>
  )
}

export default GenericListBlock