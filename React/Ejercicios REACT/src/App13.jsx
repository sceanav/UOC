import books from './Data/books.json';
import Book from './Components/Book';
const App = () => {
    return (
        <div>
           {books.map( b=> <Book book={b.title} autor={b.author}/>)}
        </div>
    );
};
export default App;