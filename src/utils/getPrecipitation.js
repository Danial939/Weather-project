export default function getPrecipitation(current) {
    let name = ''
    if (current.rain) {
        name = 'Возможен дождь'
    } 
    else if (current.snow) {
        name = 'Возможен снег'
    } else {
        name = 'Без осадков'
    }
    return name;
}