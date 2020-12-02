import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "Title is a required property."
        },
        description: {
            type: String
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        lastModifiedDate: {
            type: Date,
            default: Date.now
        },
        dueDate: {
            type: Date,
            default: Date.now
        },
        status: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false
    }
);

TodoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

TodoSchema.set('toJSON', { virtuals: true });

const model = mongoose.model('Todo', TodoSchema);

export default model;