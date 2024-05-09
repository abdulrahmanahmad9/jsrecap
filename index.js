const books = [
    {
      "id": 101,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "details": {
        "pages": 281,
        "genre": "Fiction",
        "publishedYear": 1960,
        "reviews": [
          {
            "reviewer": "John Doe",
            "content": "A classic piece of American literature."
          },
          {
            "reviewer": "Jane Smith",
            "content": "A gripping story with deep themes."
          }
        ]
      }
    },
    {
      "id": 102,
      "title": "1984",
      "author": "George Orwell",
      "details": {
        "pages": 328,
        "genre": "Dystopian",
        "publishedYear": 1949,
        "reviews": [
          {
            "reviewer": "Tom Brown",
            "content": "A chilling depiction of a dystopian future."
          }
        ]
      }
    },
    {
      "id": 103,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "details": {
        "pages": 180,
        "genre": "Fiction",
        "publishedYear": 1925,
        "reviews": [
          {
            "reviewer": "Alice Johnson",
            "content": "A timeless critique of the American Dream."
          }
        ]
      }
    },
    {
      "id": 104,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "details": {
        "pages": 585,
        "genre": "Adventure",
        "publishedYear": 1851,
        "reviews": []
      }
    },
    {
      "id": 105,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "details": {
        "pages": 432,
        "genre": "Romance",
        "publishedYear": 1813,
        "reviews": [
          {
            "reviewer": "Emma Wilson",
            "content": "A delightful exploration of romantic relationships."
          }
        ]
      }
    }
  ];
  
  /**********
  Question 1:
  getBookPages(book):
  - receives a book object
  - returns the number of pages in the book
  ===
  ANSWER: 281
  **********/
  
  function getBookPages(book) {
    // Your code here
    return book.details.pages;
  }
  console.log(getBookPages(books[0]));
  
  
  /**********
  Question 2:
  isPublishedAfter(book, year):
  - receives a book object
  - receives a year (number)
  - returns true if the book was published after the given year, otherwise returns false
  ===
  ANSWER: true
  **********/
  
  function isPublishedAfter(book, year) {
    // Your code here
    if (book.publishedYear === year) {
      return true;
    } else {return false}
  }
  console.log(isPublishedAfter(books[1], 1950));
  
  
  /**********
  Question 3:
  addBook(books, book):
  - receives an array of book objects
  - receives a new book object (with id, title, author, details)
  - adds the new book to the array
  - returns the updated array
  ===
  ANSWER:
  [
    {
      "id": 101,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "details": {
        "pages": 281,
        "genre": "Fiction",
        "publishedYear": 1960,
        "reviews": [
          {
            "reviewer": "John Doe",
            "content": "A classic piece of American literature."
          },
          {
            "reviewer": "Jane Smith",
            "content": "A gripping story with deep themes."
          }
        ]
      }
    },
    {
      "id": 102,
      "title": "1984",
      "author": "George Orwell",
      "details": {
        "pages": 328,
        "genre": "Dystopian",
        "publishedYear": 1949,
        "reviews": [
          {
            "reviewer": "Tom Brown",
            "content": "A chilling depiction of a dystopian future."
          }
        ]
      }
    },
    {
      "id": 103,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "details": {
        "pages": 180,
        "genre": "Fiction",
        "publishedYear": 1925,
        "reviews": [
          {
            "reviewer": "Alice Johnson",
            "content": "A timeless critique of the American Dream."
          }
        ]
      }
    },
    {
      "id": 104,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "details": {
        "pages": 585,
        "genre": "Adventure",
        "publishedYear": 1851,
        "reviews": []
      }
    },
    {
      "id": 105,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "details": {
        "pages": 432,
        "genre": "Romance",
        "publishedYear": 1813,
        "reviews": [
          {
            "reviewer": "Emma Wilson",
            "content": "A delightful exploration of romantic relationships."
          }
        ]
      }
    },
    {
      "id": 106,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "details": {
        "pages": 310,
        "genre": "Fantasy",
        "publishedYear": 1937,
        "reviews": [
          {
            "reviewer": "Bilbo Baggins",
            "content": "A fantastic journey through Middle-earth."
          }
        ]
      }
    }
  ]
  **********/
  
  function addBook(books, book) {
    // Your code here
    books.push (book);
    return books;
  }
  
  const newBook = {
    "id": 106,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "details": {
      "pages": 310,
      "genre": "Fantasy",
      "publishedYear": 1937,
      "reviews": [
        {
          "reviewer": "Bilbo Baggins",
          "content": "A fantastic journey through Middle-earth."
        }
      ]
    }
  };
  const updated = addBook (books,newBook)
  console.log(updated);
  
  
  /**********
  Question 4:
  addReview(book, review):
  - receives a book object
  - receives a review object (with reviewer and content)
  - adds the new review to the book's reviews array
  - returns the updated book object
  ===
  ANSWER: 
  {
    "id": 104,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "details": {
      "pages": 585,
      "genre": "Adventure",
      "publishedYear": 1851,
      "reviews": [
        {
          "reviewer": "Mark Twain",
          "content": "A great adventure with deep symbolism."
        }
      ]
    }
  }
  **********/
  
  function addReview(book, review) {
    // Your code here
book.details.reviews.push (review);
return book;
  }
  
  const newReview = {
    "reviewer": "Mark Twain",
    "content": "A great adventure with deep symbolism."
  };
  const revUpdate = addReview (books[3] , newReview);
  console.log(revUpdate);
  
  
  /**********
  Question 5:
  countReviews(book):
  - receives a book object
  - returns the total number of reviews for that book
  ===
  ANSWER: 2
  **********/
  
  function countReviews(book) {
    // Your code here
   return book.details.reviews.length;

  }
  console.log(countReviews(books[0]));

//   task-books.txt
//   6 KB