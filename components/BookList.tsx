import React from "react";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

function BookList({ title, books, containerClassName }: Props) {
  return (
    <section className="font-bebas-neue text-4xl text-light-100">
      Popular Books
    </section>
  );
}

export default BookList;
