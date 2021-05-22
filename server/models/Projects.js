import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    title: String,
    description: String,
    creators: String,
    tags: [String],
    selectedFile: String,
    url: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Projects = mongoose.model('project', projectSchema);

export default Projects;