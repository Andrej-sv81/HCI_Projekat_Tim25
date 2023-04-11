export interface Country{
    name: string,
    flag: string,
    population: number,
    area: number,
    capital: string,
    languages: string | string[],
    latitude: number,
    longitude: number,
    continents: string,
    timezones: string | string[],
    map: string
}