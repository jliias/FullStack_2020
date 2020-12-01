import React from 'react';

const SearchForm = ({ newFilter, setShowCountries, setNewFilter, countries }) => {

  // Handler for input form
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)

    var filter = event.target.value;
    console.log("FILTER: ", filter);
    let tmpList = []
    countries.forEach(function (item, index, array) {
      if (item.name.toLowerCase().includes(filter)) {
        // console.log(item.name);
        tmpList.push(item);
      }
    })
    setShowCountries(tmpList);
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