import { projectData } from "../../../data"

export default function handler(req, res) {
    const filtered = projectData.filter(project => project.id === req.query.id)
    if (filtered.length) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ "message": `Project with id of '${req.query.id}' not found` })
    }
}