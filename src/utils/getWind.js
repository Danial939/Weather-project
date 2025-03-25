export default function getWind(deg){
    let name = '';
    if (deg >= 0 && deg < 45 || deg > 315 && deg <=360) {
        name = 'северный'
    } 
    else if(deg >= 45 && deg < 135) {
        name = 'восточный'        
    }
    else if(deg >= 135 && deg < 225) {
        name = 'южный'
    }
    else {
        name = 'западный'
    }
    return name;
}