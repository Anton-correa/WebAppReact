import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';
import FillForms from './FillForms';
import municipio from './Municipios';


 const addItems = (item) => {
    console.log(item);
}

const Counter = props => (
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a React component.</p>

    <p>Current count: <strong>{props.count}</strong></p>

        <button onClick={props.increment}>Increment</button><br />
        <form>
            <FillForms name="nombre" placeholder="Nombre" type="text" addItems={this.FillForms} />
            <FillForms name="SegSoc" placeholder="Numero de Seguro Social" type="number" />
            <FillForms name="email" placeholder="Email" type="email"/>
            <FillForms name="FechaNac" placeholder="Fecha de Nacimiento" type="date" />
            <FillForms name="selec" placeholder="Seleccion" type="select" items={municipio} />
            <input type="submit" value="Submit" />
        </form>
        <p></p>
  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
