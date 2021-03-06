import mongoose from 'mongoose';
import 'mongoose-geojson-schema';
import Admin from './admin';
import AdminCampaign from './admin-campaign';

const UserTaskSchema = new mongoose.Schema({
    submittedBy : {
        userId: {type: Number, required: true},
        region: {type: String, required: true},
        persona: {type: String, required: true},
    },
    location: mongoose.Schema.Types.Point,
    locationNm: {type: String, required: true},
    campaignId: {type: mongoose.Types.ObjectId, ref: AdminCampaign  },
    status: {type: String, required: true, enum: ['ACCEPTED', 'REJECTED', 'SUBMITTED', 'OPEN', 'CLOSED']},
    validatedBy: {type: Number, ref:  Admin},
    comments: {type: String},
    photoId: {type: String},
    rewards: {type: Number},
    formData: {type: Object},
}, {
    timestamps: true
});

UserTaskSchema.index({ location: '2dsphere' });

const UserTask = mongoose.model('user.task', UserTaskSchema);

export default UserTask;
