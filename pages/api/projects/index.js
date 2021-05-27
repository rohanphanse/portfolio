import { projectData } from "../../../data"
import Utility from "../../../utility"

export default function handler(req, res) {
    let data = projectData
    // Parameters only available for POST requests
    if (req.method !== "POST") {
        return res.status(200).json(data)
    }

    const params = req.body
    if (params) {
        if (params.sort) {
            if (params.sort.type === "date") {
                data = Utility.sortByDate(projectData, { order: params.sort.order })
            }
        }
    }
    res.status(200).json(data)
}