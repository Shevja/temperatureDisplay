import React from "react";

const Form = props => (
    <div>
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Город" />
            <button>Получить информацию</button>
        </form>
    </div>
)

export default Form;