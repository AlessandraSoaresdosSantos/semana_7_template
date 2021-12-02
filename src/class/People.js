export class People{
    constructor
    (
        name, height, mass, hair_color, skin_color, eye_color, birth_year,
        gender, homeworld, created, edited, url, films, vehicles, starships
    )
    {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color; 
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
        this.gender = gender;
        this.homeworld = homeworld;
        this.created = created;
        this.edited = edited
        this.url  = url;
        this.films = new Film(films);
        this.vehicles = new Vehicle(vehicles)
        this.starships = new Starship(starships)        
    }  

}

class Film{
    constructor(film)
    {
        this.film = film
    }
} 

class Vehicle{
    constructor(vehicle)
    {
        this.vehicle = vehicle
    }
}

class Starship{
    constructor(starship)
    {
        this.starship = starship
    }
}

export function convertJsonToObject(json)
{
    return JSON.parse (json);
}
 
export function readDataPeople (obj){
    let people = new People(obj.name, 
        obj.height, 
        obj.mass, 
        obj.hair_color, 
        obj.skin_color, 
        obj.eye_color, 
        obj.birth_year, 
        obj.gender, 
        obj.homeworld,
        obj.created, 
        obj.edited, 
        obj.url);

    people.films = readDataFilms(obj.films);   
    people.vehicles = readDataVehicles(obj.vehicles);
    people.starships = readDataStarships(obj.starships);

    return people;
};

 function readDataFilms(json){
    let films = '';

    for (var key in json)
    {
        var value = json[key];
        
        films+= `<ol>  ${value} </ol>`;
      }

      return films;
 }

 function readDataVehicles(json){
    let vehicles = '';

    for (var key in json)
    {
        var value = json[key];
        
        vehicles+= `<ol>  ${value} </ol>`;
      }

      return vehicles;
 }

 function readDataStarships(json){
    let starships = '';

    for (var key in json)
    {
        var value = json[key];
        
        starships+= `<ol>  ${value} </ol>`;
      }

      return starships;
 }