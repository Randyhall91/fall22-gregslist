import { generateId } from "../Utils/generateId.js"


export class Job {
  /**
   * 
   * @param {{jobtitle: string, company: string, hours: number, rate: number, description: string, id: number}} data 
   */

  constructor(data) {
    this.jobtitle = data.jobtitle
    this.company = data.company
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.id = data.id || generateId()
  }



  get JobCardTemplate() {
    return /*html*/`
  <div class="col-12">
          <h3>${this.jobtitle}</h3>
          <h3>${this.company}</h3>
          <p>Hours: ${this.hours}</p>
          <p>Rate: ${this.rate}</p>
          <p>Description: ${this.description}</p>
        </div>
  `
  }


}