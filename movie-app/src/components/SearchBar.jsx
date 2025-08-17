import {useState} from 'react';

function SearchBar ({onSearch}){
    const [term, setTerm] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(term.trim() != ''){
            onSearch(term);
        }
    };

    return(
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
            <input
                type='text'
                placeholder='Search movies.....'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;