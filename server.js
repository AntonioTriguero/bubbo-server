
const express = require('express');
const bodyParser = require('body-parser');

const { collection, getDocs, getDoc, doc, setDoc, deleteDoc } = require('firebase/firestore');
const { db } = require('./firebase/config');

// Initialize express app:
const app = express();

// Middleware:
const cors = require('cors');

app.use(cors({
  origin: '*',
}))

// Middleware - helps parse and handle data sent in the request body. It extracts JSON data from the request body and makes it available in the req.body object:
app.use(bodyParser.json());


// Endpoint to get a specific book: 

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const docRef = doc(db, 'books', id);
  getDoc(docRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = { id: docSnapshot.id, ...docSnapshot.data() };
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Endpoint to get all books: 

app.get('/', (req, res) => {
  const docRef = collection(db, 'books');
  getDocs(docRef)
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(data);
      console.log(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Endpoint to create a new book: 

app.post('/books', (req, res) => {
  const { title, description, category, photo } = req.body;
  const docRef = doc(collection(db, 'books'));
  const newBook = { title, description, category, photo };
  setDoc(docRef, newBook)
    .then(() => {
      res.status(201).json({ message: 'Book added successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Endpoint to update a book: 

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, category, photo } = req.body;
  const docRef = doc(db, 'books', id);
  const updatedBook = { title, description, category, photo };
  setDoc(docRef, updatedBook, { merge: true })
    .then(() => {
      res.status(200).json({ message: 'Book updated successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Endpoint to delete a book:

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const docRef = doc(db, 'books', id);
  deleteDoc(docRef)
    .then(() => {
      res.status(200).json({ message: 'Book deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
})



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});