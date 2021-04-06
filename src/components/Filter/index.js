import React, { useEffect, useRef } from 'react';
import { FilterContainer } from './FilterContainer';
import { FilterContent } from './FilterContent';

const Filter = ({ children, name, ButtonFilter, isVisible,setIsVisible, ...props }) => {
  

  const filterContainerRef = useRef(null);

  const handleFilter = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        filterContainerRef &&
        !filterContainerRef.current.contains(e.target) &&
        !(e.srcElement.localName === 'button')
      ) {
        setIsVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <FilterContainer>
      {ButtonFilter ? (
        <ButtonFilter onClick={handleFilter}>{name}</ButtonFilter>
      ) : (
        <button onClick={handleFilter}>{name}</button>
      )}
      <FilterContent {...props} ref={filterContainerRef} visible={isVisible}>
        {children}
      </FilterContent>
    </FilterContainer>
  );
};

export default Filter;
