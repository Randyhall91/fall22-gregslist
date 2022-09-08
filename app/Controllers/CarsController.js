import { appState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function drawCars() {
  let template = ''
  appState.cars.forEach(car => template += car.CarCardTemplate)
  // TODO trigger bad set
  setHTML('listings', template)
}


export class CarsController {
  constructor() {
    drawCars() // NOTE draw cars on page load do not do this for houses or jobs

    // NOTE Sets up a listener to be triggered each time a change occurs to the cars array causing the page to re-render each of the cars 
    appState.on('cars', drawCars)
  }


  showCars() {
    drawCars()
  }

  addCar() {
    try {
      // REVIEW FORM SUBMISSION EXAMPLE 
      // THE THREE THINGS WE DO WITH EVERY FORM SUBMISSION!!!!
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)

      carsService.addCar(formData)

      // @ts-ignore
      form.reset()

    } catch (error) {
      console.error('addCar', error)
    }
  }



}