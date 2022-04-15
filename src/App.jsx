import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  
  const [data, setData] = useState([])
  const [location, setlocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a676acc70dc743e06082235a87017ecf`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setlocation('')
    }
  }

  return (
    <div className='app'>
      <Container>
        <div className='search'>
          <input
            value={location}
            onChange={event => setlocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter your location..'
            type="text"
          >
          </input>
        </div>
      <Card className='mainCard'>
        <Card.Body>
          <Card.Title className='location'>{data.name}</Card.Title>
          <hr></hr>
            <Card.Text className='temperture'>{data.main ? <p><b>Current Temperture: </b>{data.main.temp} °F</p> : null}</Card.Text>
            <Card.Text className='temperture'>{data.main ? <p><b>Feels Like: </b>{data.main.feels_like} °F</p> : null}</Card.Text>
            <Card.Text className='temperture'>{data.main ? <p><b>Humidity: </b>{data.main.humidity} %</p> : null}</Card.Text>
            <Card.Text className='description'>{data.weather ? <p><b>Cloud Behavior: </b>{data.weather[0].description}</p> : null}</Card.Text>
            <Card.Text className='description'>{data.wind ? <p><b>Wind Speed: </b>{data.wind.speed}</p> : null}</Card.Text>
        </Card.Body>
      </Card>
      </Container>
    </div>
  );
}

export default App;
