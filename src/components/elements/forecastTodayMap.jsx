import React from "react";

const CityForecastForTodayMap = () => (
    <iframe
        className="map-container animate__animated animate__fadeInRight"
        title="windy widget"
        src="https://embed.windy.com/embed2.html?lat=50.402&lon=79.541&detailLat=55.154&detailLon=73.740&width=650&height=450&zoom=4&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1">
    </iframe>
)

export default CityForecastForTodayMap;