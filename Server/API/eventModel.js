import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    host_id: {
        type: String,
        required: true
    },
    invitee_ids: [{
        type: String,
        required: true
    }],
    date: {
        type: Date,
        required: true
    }
}, {timestamps: true});

export default mongoose.model('Event', eventSchema);