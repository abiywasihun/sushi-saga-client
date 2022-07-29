import React, { Component,useState,useEffect } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import {SushiContextProvider} from './Context/SushiContext';
// Endpoint!


function App() {
        return (
          <div className = "app" >
          <SushiContextProvider>
            <SushiContainer/>
            <Table/>
            </SushiContextProvider>
            </div>
        );
}

export default App;