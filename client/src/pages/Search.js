import React, {useState} from "react";
import Hero from "../components/Hero";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";

function Search() {
    // Setting our component's initial state
    const [bookSearch, setBookSearch] = useState("")
    const [bookLog, setBookLog] = useState({});
  
    const handleInputChange = event => {
        const { value } = event.target;
        setBookSearch(value);
      };
    
    const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getGoogleBook(bookSearch)
      .then(res => {
        if(res.status === 200){
          setBookLog(res.data.items)
        } else {
          console.log(res.status);
        }
      })
      .catch(err => console.log(err));
    };

    function handleSave(key, title, subtitle, authors, description, image, link) {
        API.saveBook({
          key : key,
          title : title,
          subtitle : subtitle,
          authors : authors,
          description : description,
          image : image,
          link : link
        })
        .catch(err => console.log(err));
    };
  
    
  return (
    <div>
      <Hero></Hero>
      <Row>
          <Form>
              <Form.Group controlId="query" value={bookSearch} onChange={handleInputChange}>
                  <Form.Label>Book Search:</Form.Label>
                  <Form.Control placeholder="Harry Potter" />
                  <Button className="btn-dark d-flex justify-content-center mt-3" onClick={handleFormSubmit}>Search</Button>
              </Form.Group>
          </Form>
        </Row>
        <Row>
          <Card>
        {!bookLog.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
          <BookList>
          {bookLog.map(book => {
            let id = "";
            if(book.id === undefined){
              id = Math.floor(Math.random()*10000);
            } else {
              id = book.id;
            }
            let title = "";
            if(book.volumeInfo.title === undefined){
              title = "No Title";
            } else {
              title = book.volumeInfo.title;
            }
            let subtitle = "";
            if(book.volumeInfo.subtitle === undefined){
              subtitle = "";
            } else {
              title = book.volumeInfo.subtitle;
            }
            let authors = [];
            if(book.volumeInfo.authors === undefined){
              authors = ["No Author"];
            } else {
              authors = book.volumeInfo.authors;
            }
            let description = "";
            if (book.volumeInfo.description){
              description = book.volumeInfo.description;
            } else {
              description = "No description.";
            }
            let image = "";
            if(book.volumeInfo.imageLinks === undefined){
              image = "https://placehold.it/128x128";
            } else { 
              image = book.volumeInfo.imageLinks.thumbnail;
            }
            let link = "";
            if(book.volumeInfo.infoLink){
              link = book.volumeInfo.infoLink
            } else { 
              link = ""
            }
              return (
                <BookListItem
                  key={id}
                  id={id}
                  title={title}
                  subtitle={subtitle}
                  authors={authors}
                  description={description}
                  image={image} 
                  link={link}
                  onClick={handleSave}
                />
              );
            })} 
          </BookList>
            )}
        </Card>
      </Row>
    </div>
  );
}

export default Search;
