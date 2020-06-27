import React from 'react';
import ReactDOM from 'react-dom';
import App from './invie';
import './css/invie.css';
import './css/animations.css';
import cheet from 'cheet.js'
import logoPortada from './images/invie.png'
import logoPlatzi from './images/platzi.png'
import acustica from './images/invie-acustica.png'
import classic from './images/invie-classic.png'
import {Provider} from 'react-redux'
import { createStore } from 'redux'

import easterA from './images/easter-a.png'
import easterB from './images/easter-b.png'

const initialState ={
  isAnimated: false,
  menu:[
    {
        href:'index.html',
        title:'Home'
    },
    {
        href:'#guitarras',
        title: 'Guitarras'
    },
    {
        href: 'precios.html',
        title:'Precios'
    }
  ],
  logoPortada: logoPortada,
  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name:'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera Pura',
        'Incluye estuche invisible de aluminio'
  
      ]
  
    },
    {
      image: classic,
      alt: 'Guitarra Invie classic',
      name:'Invie classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como Rockstar'
  
      ]
    }
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return { ...state, ...newProps }
    }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

const easter ={
  isAnimated: 'is-animated',
  menu:[],
    logoPortada: logoPlatzi,
    guitarras: [
      {
        image: easterA,
        alt: 'Guitarra Padre de Familia',
        name:'Invie Familiar',
        features: [
          'Lista para copiar a los Simpsons',
          'Aire Puro',
          'Chistes malos'
    
        ]
    
      },
      {
        image: easterB,
        alt: 'Guitarra Invie classic',
        name:'Invie classic',
        features: [
          'Estilo vintage',
          'Liviana',
          'Inicia tu camino como Rockstar'
    
        ]
      }
    ]

}
cheet('i', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
  // console.log('lo lograste, descrubriste el easter egg');
});

cheet('g', () => {
  // console.log('regresaste al estado inicial');
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState,
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

