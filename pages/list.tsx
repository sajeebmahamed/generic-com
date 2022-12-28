import React from 'react'
import GenericListBlock from '../components/GenericList'
import { books } from '../components/GenericSelect/data'

const list = () => {
  return (
    <div>
      <GenericListBlock
        items={books}
        renderItem={(book) => (
          <div>
            {book.title} ---- by {book.author}
          </div>
        )}
        keyExtractor={(book) => book.id}
      />
    </div>
  )
}

export default list