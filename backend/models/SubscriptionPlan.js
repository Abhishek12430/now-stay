import mongoose from 'mongoose';

const subscriptionPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    maxProperties: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    durationDays: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const SubscriptionPlan = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);
export default SubscriptionPlan;
