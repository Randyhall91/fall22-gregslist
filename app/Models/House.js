import { generateId } from "../Utils/generateId.js"

export class House {
  /**
   * 
   * @param {{bedrooms: number, bathrooms: number, levels: number, imgUrl: string, year: number, price: number, description: string, id?: number}} data 
   */

  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = this.description
    this.id = data.id || generateId()
  }
  get HouseCardTemplate() {
    return /*html*/`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="house" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.price} | ${this.year}
          </h5>
          <p>
            <strong>Levels: ${this.levels}| Bedrooms: ${this.bedrooms}| Bathrooms: ${this.bathrooms}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }


}