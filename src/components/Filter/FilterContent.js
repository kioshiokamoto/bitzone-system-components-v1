import styled from 'styled-components';

export const FilterContent = styled.div`
  display: ${(props)=> props.visible ? 'block' : 'none'};
  position: absolute;

  //Si se tiene padding en boton debera asignar el bottom / right
  bottom:${props => props.bottom ? `${props.botom}px` : '0'};
  right:${props => props.right ? `${props.right}px`  : '0'};
  transform:translateY(100%);

  background-color: #fff;
  width: ${props =>  props.width ? `${props.width}px` : '500px '};
  height: ${props => props.height ? `${props.height}px` :'635px'};

  padding: 44px 50px 26px 50px;
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);
  overflow:${props => props.overflow ? props.overflow : 'hidden'};
  
`;
