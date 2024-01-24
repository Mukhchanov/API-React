
import '../style/layouts/SearchBar.scss';
import { useState } from 'react';

function SearchBar({ userSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        userSubmit(term);
        setTerm('');
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return(
        <div className='search-bar d-flex justify-content-start align-items-center'>
            <form className='search-bar__form' onSubmit={handleFormSubmit}>
                <label className='search-bar__term'> Enter Search Term </label>
                <br/>
                <input className='search-bar__input' value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar;