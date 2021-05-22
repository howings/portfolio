import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import projectRoutes from './routes/projects.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/projects', projectRoutes);

// const URL = 'mongodb+srv://wing:VJNqTWAHDawURSKT@cluster0.wpqrm.mongodb.net/portfolio?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);