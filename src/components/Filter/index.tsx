import React, { useEffect, useRef } from 'react';
import { FilterContainer } from './FilterContainer';
import { FilterContent } from './FilterContent';
//import PropTypes from 'prop-types';
interface FilterProps {
  name: string;
  ButtonFilter?: any;
  isVisible: boolean;
  setIsVisible: Function;
}

const Filter: React.FC<FilterProps> = ({
  children,
  name,
  ButtonFilter,
  isVisible,
  setIsVisible,
  ...props
}): React.ReactElement => {
  const filterContainerRef: any = useRef(null);

  const handleFilter = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    const handleClickOutside = (e: any) => {
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
        <ButtonFilter {...props} onClick={handleFilter}>
          {name}
        </ButtonFilter>
      ) : (
        <button onClick={handleFilter}>{name}</button>
      )}
      <FilterContent {...props} ref={filterContainerRef} visible={isVisible}>
        {children}
      </FilterContent>
    </FilterContainer>
  );
};

Filter.defaultProps = {
  name: 'Filtro',
  ButtonFilter: undefined,
  isVisible: false,
  setIsVisible: () => {},
};

export default Filter;
