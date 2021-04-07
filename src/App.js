// import { useEffect, useState } from 'react';
import { useState } from 'react';
import './app.css';
//import { Button }  from './components';
// import { Button, Modal, Drawer, Skeleton, Slider, Switch, Spinner,Input} from './components';
// // import sourceImage from './components/Modal/modal.jpg'
// import { ModalBody, ModalHeader } from './components/Modal/ModalElements';
// import useModal from './components/Modal/modalHook';

import { Timeline, TimelineItem } from './components';
import Filter from './components/Filter';

// import Avatar from './assets/img/avatar.jpg'
function App() {
  const items = [
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: true,
      icon: 'user',
      isFinal: false,
    },
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: true,
      icon: 'user',
      isFinal: false,
    },
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: true,
      icon: 'user',
      isFinal: false,
    },
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: true,
      icon: 'user',
      isFinal: false,
    },
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: false,
      icon: 'user',
      isFinal: false,
    },
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: false,
      icon: 'user',
      isFinal: false,
    },
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: false,
      icon: 'check',
      isFinal: false,
    },
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: false,
      icon: 'check',
      isFinal: false,
    },
    {
      title: 'Creacion de solicitud',
      author: 'Juan Carlos',
      date: '19 de Marzo 2021',
      done: false,
      icon: '',
      isFinal: true,
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="container">
        <div className="containerFilter">
          <Filter name="Filtro" overflow="hidden" isVisible={isVisible} setIsVisible={setIsVisible}>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
            <h3>Estado</h3>
          </Filter>
        </div>

        <div className="container-component">
          <Timeline>
            {items.map((item) => {
              return (
                <TimelineItem
                  done={item.done}
                  connectorLenght={4}
                  iconName={item.icon}
                  isFinal={item.isFinal}
                >
                  <div>
                    <h3 style={{ fontSize: '15px' }}>{item.title}</h3>
                    <small style={{ fontSize: '12px' }}>{item.author}</small>
                    <small style={{ marginLeft: '200px', fontSize: '12px' }}>{item.date}</small>
                  </div>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </div>
    </>
  );
}

export default App;
