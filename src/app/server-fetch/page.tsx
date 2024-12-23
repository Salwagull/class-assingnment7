import React from 'react'

interface Book {
    name: string;
    type: string;
    available?: string;
  }

const page =async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
  
    const parsedResponse: Book[] = await response.json();
  
    console.log("books >>>", parsedResponse);
  
    return (
      <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {parsedResponse.map((book) => (
            <div
              key={book.available}
              className="flex flex-col gap-4 p-5 border rounded-lg shadow-md hover:shadow-3xl transition-all"
            >
              <p className="text-md font-bold text-3xl text-black">{book.name}</p>
              <p className="text-sm text-gray-700">{book.type}</p>
              <p className="text-sm text-gray-700">{book.available}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default page