import React, { useState} from 'react'

const Search = ( { getQuery } ) => {

    const[text, searchText] = useState('');

    const onChange = (q) => {
        searchText(q);
        getQuery(q);
    }

    return (
        <section className="search">
            <form>
                <input type="text" placeholder="Search Character" value={text} onChange={(e) => onChange(e.target.value)} autoFocus className="form-control" />
            </form>
        </section>
    )
}

export default Search
