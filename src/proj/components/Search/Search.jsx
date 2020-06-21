import React, {useEffect, useRef, useState} from 'react';

import './Search.css';
import classnames from 'classnames';
import useOnClickOutside from '../../utils/OnClickOutside';

import SearchDropdownContent from '../SearchDropdownContent/SearchDropdownContent';
import {searchPhotos} from "../../actions/thunkActions";

function Search({ className, topics, setTopic }) {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));

  const onSearchChange = ({ target: { value } }) => {
    setSearchText(value);

  };
    const onFormSubmit = (e) => {
        e.preventDefault();
        setTopic(searchText);
    };

  const onSearchClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div ref={ref} className={classnames('search', className)}>
        <form onSubmit={onFormSubmit}>
            <div className={classnames('search-bar')} >
            <input id="input"
                type="text" placeholder="Search for free photos.."
                className={classnames('search__input', className)}
                value={searchText}
                onClick={onSearchClick}
                onChange={onSearchChange}
            />
            <button type="submit" className="search-button"  >Search</button>
            </div>
            <div className={classnames('search__content', {
                search__content_open: isOpen
            })}
            >
                {/*<SearchDropdownContent className="search__dropdown-content" topics={topics}/>*/}
            </div>
        </form>

    </div>
  );
}

export default Search;
