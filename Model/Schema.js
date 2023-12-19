import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const FormData = mongoose.model('FormData', formDataSchema);

export default FormData;
