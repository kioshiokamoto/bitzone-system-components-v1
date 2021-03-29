import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// @atributes

// color = "white" - default 
// bgColor = "red" - "yellow" - "green" - "blue" - "purple" - "indigo" - "pink" - default
// rounded = "soft" - "full" - default
// size = "sm" - "md"(default) - "lg" - "xl"
// isShadow = {true} - {false}
// full = {true} - {false}
// isDisabled = {true} - {false}
// outliner = {true} - {false}
// outlinerColor = "red" - "yellow" - "green" - "blue" - "purple" - "indigo" - "pink" - default




//Establece el background del boton
const setBgColor = (bgColor = 'default') => {
  switch (bgColor) {
    case 'red':
      return '#DC2626';
    case 'yellow':
      return '#FBBF24';
    case 'green':
      return '#34D399';
    case 'blue':
      return '#3B82F6';
    case 'purple':
      return '#8B5CF6';
    case 'indigo':
      return '#6366F1';
    case 'pink':
      return '#EC4899';
    default:
      return '#9CA3AF';
  }
};

//Establece el color de la fuente
const setColorText = (color = 'default') => {
  return color === 'white' ? '#F9FAFB' : '#111827';
};

//Establece el borde
const roundedBtn = (rounded = 'default') => {
  // return color === 'primary' ? '#2EBD9B' : 'black'
  switch (rounded) {
    case 'full':
      return '20px';
    case 'soft':
      return '10px';
    default:
      return '0px';
  }
};

//Tamaño de fuente
const setFontSize = (size) => {
  switch (size) {
    case 'xl':
      return '1.25rem';
    case 'lg':
      return '1.125rem';
    case 'md':
      return '1rem';
    case 'sm':
      return '0.875rem';
    default:
      return '1rem';
  }
};

//Establece sombreado
const setShadow = (isShadow = false) => {
  return isShadow ? '-1px 6px 35px -7px rgba(0,0,0,0.75);' : 'none';
};

//Establece Hover Effect
const setHover = (bgColor = 'default', color = 'default') => {
  const isWhite = color === 'white';
  switch (bgColor) {
    case 'red':
      return isWhite ? '#991B1B' : '#F87171';
    case 'yellow':
      return isWhite ? '#F59E0B' : '#FCD34D';
    case 'green':
      return isWhite ? '#10B981' : '#6EE7B7';
    case 'blue':
      return isWhite ? '#1D4ED8' : '#60A5FA';
    case 'purple':
      return isWhite ? '#7C3AED' : '#A78BFA';
    case 'indigo':
      return isWhite ? '#4338CA' : '#818CF8';
    case 'pink':
      return isWhite ? '#BE185D' : '#F472B6';
    default:
      return isWhite ? '#000' : '#D1D5DB';
  }
};

//Tamaño de acuerdo al contenedor
const setFullWidth = (full) =>
  full &&
  css`
    width: 100%;
  `;

//Tema en disabled
const themeDisabledBtn = (isDisabled) =>
  isDisabled &&
  css`
    opacity: 0.5;
    &:hover { 
      opacity: 0.5;
    }
  `;

//Button con solo border sin bgColor
const setOutline = (outliner, outlinerColor) => {
  if (outliner) {
    switch (outlinerColor) {
      case 'red':
        return css`
          color: #dc2626;
          border: 1.5px solid #dc2626;
          background-color: unset;

          &:hover {
            color: #f9fafb;
            background-color: #dc2626;
          }
        `;
      case 'yellow':
        return css`
          color: #fbbf24;
          border: 1.5px solid #fbbf24;
          background-color: unset;

          &:hover {
            color: #f9fafb;
            background-color: #fbbf24;
          }
        `;

      case 'green':
        return css`
          color: #34d399;
          border: 1.5px solid #34d399;
          background-color: unset;

          &:hover {
            color: #f9fafb;
            background-color: #34d399;
          }
        `;

      case 'blue':
        return css`
          color: #3b82f6;
          border: 1.5px solid #3b82f6;
          background-color: unset;

          &:hover {
            color: #f9fafb;
            background-color: #3b82f6;
          }
        `;

      case 'purple':
        return css`
          color: #8b5cf6;
          border: 1.5px solid #8b5cf6;
          background-color: unset;

          &:hover {
            color: #f9fafb;
            background-color: #8b5cf6;
          }
        `;
      case 'indigo':
        return css`
          color: #6366f1;
          border: 1.5px solid #6366f1;
          background-color: unset;

          &:hover {
            color: #f9fafb;
            background-color: #6366f1;
          }
        `;
      case 'pink':
        return css`
          color: #ec4899;
          border: 1.5px solid #ec4899;
          background-color: unset;

          &:hover {
            color: #f9fafb;
            background-color: #ec4899;
          }
        `;
      default:
        return css`
          color: #111827;
          border: 1.5px solid #111827;
          background-color: unset;

          &:hover {
            color: #f9fafb;
            background-color: #111827;
          }
        `;
    }
  }
};


const ButtonStyled = styled.button.attrs((props) => ({
  disabled: props.isDisabled,
}))`
  background-color: ${({ bgColor }) => setBgColor(bgColor)};
  border: none;
  box-shadow: ${({ isShadow }) => setShadow(isShadow)};
  color: ${({ color }) => setColorText(color)};
  cursor: pointer;
  font-family: 'Sora', sans-serif;
  font-size: ${({ size }) => setFontSize(size)};
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: ${({ rounded }) => roundedBtn(rounded)};
  outline: none;
  transition: all 0.2s ease-in-out;
  ${({ full }) => setFullWidth(full)};

  &:hover {
    background-color: ${({ bgColor, color }) => setHover(bgColor, color)};
  }

  ${({ isDisabled }) => themeDisabledBtn(isDisabled)}

  ${({ outliner, outlinerColor }) => setOutline(outliner, outlinerColor)}
`;



const Button = (props)=>(
  <ButtonStyled {...props}/>
)

Button.propTypes = {
  /**
   * PARA MEDIR EL TAMANIO DE SU CORAZON
   */
  size: PropTypes.string
}
Button.defaultProps = {
  size: 10
}



export default Button;
