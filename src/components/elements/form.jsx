import React from "react";
import '../assets/form.css'

const Form = props => (
    <div className="form-container">
                Выбор региона
                <form onSubmit={ props.weatherMethod }>
                    <input type="text" name="city" placeholder="Город" />
                    <button>Получить информацию</button>
                </form>
            </div>
)

export default Form;