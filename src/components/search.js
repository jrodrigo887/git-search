import React from 'react'

import PropTypes from 'prop-types'
const Search = ({isDisabled , handleSearch}) => (
    <div className="search">
        <input type='search' placeholder='Pesquise usuário Git'
            onKeyUp={handleSearch}
            disabled={ isDisabled }
        />
    </div>
)

// Search.defaultProps = {
//     isDisabled: false
// }

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
    
}

export default Search