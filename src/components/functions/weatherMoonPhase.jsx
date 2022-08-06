import React from "react";

const weatherMoonPhase = props => {
    if (props.moonPhase < 0.12) {
        return 'Новолуние';
    } else if (props.moonPhase < 0.25) {
        return 'Молодая луна';
    } else if (props.moonPhase < 0.37) {
        return 'Первая четверть';
    } else if (props.moonPhase < 0.5) {
        return 'Прибывающая луна';
    } else if (props.moonPhase < 0.65) {
        return 'Полнолуние';
    } else if (props.moonPhase < 0.8) {
        return 'Убывающая луна';
    } else {
        return 'Старая луна';
    }
}

export default weatherMoonPhase 