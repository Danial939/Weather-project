export default function getTime(dt, type) {
    let milsec = dt * 1000;
    const date = new Date(milsec);
    let result = 
        type == 'hour' ? date.getHours() :
        type == 'min' ? date.getMinutes() :
        type == 'weekday' ? date.toLocaleDateString('ru-RU', {weekday: 'short'}) :
        type == 'day' ? date.toLocaleDateString('ru-RU', {day: 'numeric'}) :
        date.toLocaleDateString('ru-RU', {month: 'short'});
    return result;
}