export const getWeatherDetail = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('get', '/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2', true)
    xhr.send()
    xhr.onreadystatechange = function(e) {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(JSON.parse(xhr.responseText).results);
          resolve(JSON.parse(xhr.responseText).results)
        } else {
          reject(JSON.parse(xhr.responseText))
        }
      }
    }
  })

};
