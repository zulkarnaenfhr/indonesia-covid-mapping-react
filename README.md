# Indonesia Covid-19 Risk Score Mapping and Data Dashboard

Indonesia Covid-19 Mapping and Data Dashboard is a website that can monitor the latest conditions for the COVID-19 pandemic in Indonesia developed by SpaceCapt-Tech 2020. This project is very useful for the public if they want to do the latest monitoring of the covid-19 pandemic in Indonesia. this project was created using react js technology and some of its supporting libraries. To see the project being in a deploy in vercel app, these are the result <a href="https://indonesia-covid-mapping-react.vercel.app/" target="_blank">Indonesian Covid-19 Mapping and Data Dashboard</a>

## Method

### Data

For my own data I use several sources with the main source from <a href="https://covid19.go.id/dokumentasi-api" target="_blank">Covid19.go.id</a>. Because the application programming interface provided by the government is blocked by the cors policy, So I outsmarted it by retrieving API using node Js with Express, Cors, and node-fetch libraries. After being called, it will return to JSON with cors option-origin only the website link that I used. For the Documentation <a href="https://github.com/zulkarnaenfhr/api-covid-indonesia" target="_blank">Github</a>, for online response <a href="https://api-covid-indonesia.herokuapp.com/" target="_blank">Heroku Apps</a>

### Map

For the map feature, I'm using the library from <a href="https://react-leaflet.js.org/" target="_blank">React-Leaflet</a> with tile layers from <a href="https://www.mapbox.com/" target="_blank">MapBox</a>

### Chart

To do some charting features, I use the Js Library from <a href="https://www.amcharts.com/" target="_blank">AmChart.Js</a>

## Screenshot

### Indonesia Data

![image](https://user-images.githubusercontent.com/71364128/177536862-00843811-dd51-4440-a70c-7382b684da18.png)

### Province Data
![image](https://user-images.githubusercontent.com/71364128/177536912-4ef51201-2e2b-49a8-9e28-463e20809507.png)

### Fullscreen View

![image](https://user-images.githubusercontent.com/71364128/177536949-6b8ab374-912d-4914-95ee-e37f13db64ed.png)
