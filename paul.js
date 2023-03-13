fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
            json.forEach(element => {
                var _current_Card = `<div class="card" style="width: 18rem; margin: 20px;">
                                            <img src="${element.flags.png}" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${element.name.official}</h5>
                                                <p class="card-text">Region: ${element.region}</p>
                                                <p class="card-text">Population: ${element.population}</p>
                                                <p class="card-text">Area: ${element.area} Km²</p>
                                                <a href="${element.maps.googleMaps}" class="btn btn-primary">Location</a>
                                            </div>    
                                    </div>`
                var div = document.createElement('div')
                div.className = "col-lg-3 col-sm-5"
                div.innerHTML = _current_Card;
                var div1 = document.createElement('div')
                div1.className = "col-lg-1 col-sm-1"
                document.getElementById('allCountries').appendChild(div1);
                document.getElementById('allCountries').appendChild(div);
            });
      })