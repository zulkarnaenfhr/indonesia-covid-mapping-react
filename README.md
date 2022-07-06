# Indonesia Covid-19 Risk Score Mapping and Data Dashboard

Indonesia Covid-19 Mapping and Data Dashboard is a website that can monitor the latest conditions for the COVID-19 pandemic in Indonesia developed by SpaceCapt-Tech 2020. This project is very useful for the public if they want to do the latest monitoring of the covid-19 pandemic in Indonesia. this project was created using react js technology and some of its supporting libraries

## Method

### Data

for my own data I use several sources with the main source from <a href="https://covid19.go.id/dokumentasi-api" target="_blank">Covid19.go.id</a>. because the application programming interface provided by the government is blocked by the cors policy. So I used the api provided by <a href="https://github.com/Reynadi531/api-covid19-indonesia-v2" target="_blank">Reynaldi531</a>. then for the City Score and Indonesia Covid-19 News, I outsmarted it by retrieving API using node Js with Express, Cors, and node-fetch libraries. After being called, it will return to JSON with cors option-origin only the website link that I used. For the Documentation <a href="https://github.com/zulkarnaenfhr/api-covid-indonesia" target="_blank">Github</a>, for online response <a href="https://api-covid-indonesia.herokuapp.com/" target="_blank">Heroku Apps</a>

### Map

For the map feature, I'm using the library from <a href="https://react-leaflet.js.org/" target="_blank">React-Leaflet</a> with tile layers from <a href="https://www.mapbox.com/" target="_blank">MapBox</a>

### Chart

To do some charting features, I use the Js Library from <a href="https://www.amcharts.com/" target="_blank">AmChart.Js</a>

## Screenshot

### Indonesia Data

![image](https://user-images.githubusercontent.com/71364128/158176309-02b65702-d016-4d44-83c9-fca572c3be9f.png)

### Province Data

![image](https://user-images.githubusercontent.com/71364128/158176371-4b6484ce-739a-413e-87d4-35d804b872cc.png)

### Fullscreen View

![image](https://user-images.githubusercontent.com/71364128/158176477-4a974c64-7c19-4b60-ac0f-55d4dda7c43b.png)
