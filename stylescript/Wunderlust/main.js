// Foursquare API Info
const clientId = 'ZLF1NF1A4QNIVIXYOLLDLLVTAFWBLN4B0TBW0QCHBVSKHDMY';
const clientSecret = 'MHAVMPBMVBXC2SOF2SIZJ1PYSW3A4PHJIGAGRS35SBGYANV1';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// APIXU Info
const apiKey = 'c8c25d0c01824cd7af6114344192508';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4"), $("#venue5"), $("#venue6") ];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
// GET VENUES
const getVenues = async () => {	
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20190826`;

  const urlToFetchTest = "https://api.foursquare.com/v2/venues/explore?near=london&limit=10&client_id=ZLF1NF1A4QNIVIXYOLLDLLVTAFWBLN4B0TBW0QCHBVSKHDMY&client_secret=MHAVMPBMVBXC2SOF2SIZJ1PYSW3A4PHJIGAGRS35SBGYANV1&v=20190826";
  
  try {
    const response = await fetch(urlToFetchTest);  
    if(response.ok){      
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      venues;
      console.log(venues);
    }
    else {
      return new Error('There was an error!')
    }
  }  
  catch(error) {
    console.log(error.message)
  }
}

// GET FORECAST
const getForecast = async () => {
	const urlToFetch = `${forecastUrl}${apiKey}&q=${$input.val()}&days=4&hour=12`
  try {
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json();
      const days = jsonResponse.forecast.forecastday;
      return days;
    }
  }
  catch(error) {
    console.log(error)
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
		const venueIcon = venue.categories[0].icon;
    const venueImgSrc = venueIcon.prefix + 'bg_64' + venueIcon.suffix;
    
    let venueContent = createVenueHTML(venue.name , venue.location , venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}





const renderForecast = (days) => {
  $weatherDivs.forEach(($day, index) => {
    // Add your code here:
		const currentDay = days[index];

    let weatherContent = createWeatherHTML(currentDay);
    $day.append(weatherContent);
  });
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast))
  return false;
}

$submit.click(executeSearch)

getVenues()