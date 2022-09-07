import { appState } from "../AppState.js";
import { Job } from "../Models/job.js";
import { saveState } from "../Utils/Store.js";

class JobsService {
  addJob(formData) {
    let job = new Job(formData)
    appState.jobs = [job, ...appState.jobs]
    saveState('jobs', appState.jobs)
  }
}

export const jobsService = new JobsService()