import React from 'react'
import { books, laptops, movies } from './data';
import GenericSelect from './GenericSelect';

export type Book = {
  id: string;
  title: string;
  author: string;
}

export type Movie = {
  id: string;
  title: string;
  releaseDate: string;
}

export type Laptop = {
  id: string;
  model: string;
  releaseDate: string;
}

const GenericBlock = () => {
  const [book, setBook] = React.useState<Book>(books[0])
  const [movie, setMovie] = React.useState<Movie>(movies[0]);
  const [laptop, setLaptop] = React.useState<Laptop>(laptops[0]);

  return (
    <div>
      Selected book: {book.title} by {book.author}
      <br />
      <br />
      Selected movie: {movie.title}, released in {movie.releaseDate}
      <br />
      <br />
      Selected laptop: {laptop.model}, released in {laptop.releaseDate}
      <br />

      <GenericSelect<Book> 
        onChange={(value) => setBook(value)}
        values={books}
      />
      <GenericSelect<Laptop>
        titleKey="model"
        onChange={(value) => setLaptop(value)}
        values={laptops}
      />
    </div>
  )
}

export default GenericBlock