export default { callFetch }

/**
 * llamada a Api mediante jsonp
 * @param url: url del servicio
 * utilizado en la carga de eventos y al añadir un evento al calendario
 */
async function callFetch (url, options = { credentials: 'same-origin' }) {
  let response = await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw response.statusText
      } else {
        return response.json()
      }
    })
    .then(data => {
      return data
    })
    .catch(error => {
      throw error
    })
  return response
}
