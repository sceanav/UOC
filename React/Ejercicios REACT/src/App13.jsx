import books from './Data/books.json';
import ShowBook from './Components/Book';
const App = () => {
    return (
        <div>
           {books.map( b=> <ShowBook book={b.title} autor={b.author}/>)}
        </div>
    );
};
export default App;