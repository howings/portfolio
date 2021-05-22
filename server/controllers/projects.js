import mongoose from 'mongoose';
import Projects from '../models/Projects.js';


export const getProjects = async (req, res) => {
    try {
        const projects = await Projects.find();
        console.log(projects);
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    const project = req.body;
    const newProject = new Projects(project);
    try {
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    const { id: _id } = req.params;
    const project = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("There is no project with that ID.");

    const updatedProject = await Projects.findByIdAndUpdate(_id, { ...project, _id }, { new: true });
   
    res.json(updatedProject);
}

export const deleteProject = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("There is no project with that ID.");

    await Projects.findByIdAndRemove(id);

    res.json({ message: 'Project is deleted successfully.' });
}