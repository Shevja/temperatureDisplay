import React from "react";
import '../assets/info.css'

const Form = props => (
    <div className="input-container">
        <form className="form-container" onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Город" />
            <button>Получить информацию</button>
        </form>
    </div>
)

export default Form;