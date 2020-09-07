import userName from '../mock_users'

const API_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q='

export const getUser = async () => {
    return new Promise((resolve, reject) => {
        resolve(userName)
    })
}

export const getWeather = async (city) => {
    const response = await fetch(`${API_WEATHER}${city}&appid=c93dd3b0d866284eada1abec31cafbe4`)
    const weather = await response.json()
    return weather;
}