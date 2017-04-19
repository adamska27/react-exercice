import React from 'react';
import HeaderForm from '../HeaderForm.jsx';
import InputColor from '../InputColor.jsx';
import Button from '../Button.jsx';
import {SketchPicker} from 'react-color';
import './Form.css';

const Form = (props) => <form>

    <HeaderForm label={'Choisir un nom de couleur : '}/>

    <InputColor name={"colorName"} handleChange={props.handleChange}/>

  <div class="SketchPicker">
    <SketchPicker color={props.background} onChangeComplete={props.handleChangePalette}/>
  </div>

    <p>
        <Button className={"validate"} text={'Valider'} function={props.handleSubmit}/>
    </p>

    <p>
        <Button className={"delete"} text={'Supprimer dernier ajout'} function={props.handleDelete}/>
    </p>
</form>;

export default Form;
