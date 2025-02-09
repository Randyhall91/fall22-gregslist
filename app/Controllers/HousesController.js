import { appState } from "../AppState.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function drawHouses() {
  let template = ''
  appState.houses.forEach(house => template += house.HouseCardTemplate)
  setHTML('listings', template)
}



export class HousesController {
  constructor() {

    appState.on('houses', drawHouses)
    console.log('hello from house controller');
  }

  showHouses() {
    drawHouses()
  }

  addHouse() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      form.reset()


    } catch (error) {
      console.error('addHouse', error);
    }
  }
}