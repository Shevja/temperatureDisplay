import React from "react";
import '../assets/searchBar.css'
import 'animate.css';

const Form = props => (
    <div style={{transition: 'all .3s'}} id="input-c" className="input-container animate__animated animate__fadeIn">
        <form className="form-container" onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Город" />
            <button onClick={()=>{
                document.getElementById('input-c').classList.add("slideUp");
            }}>Получить информацию</button>
        </form>
    </div>
)

export default Form;