import React from 'react';

const SearchForm = ({ newFilter, setNewFilter, FilterCountries }) => {

    // Handler for input form
    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
        FilterCountries(event.target.value);
    }

    // console.log(newFilter, handleFilterChange)
    return (
        <form>
            find countries
            <input
                value={newFilter}
                onChange={handleFilterChange}
            />
        </form>
    );
}

export default SearchForm;