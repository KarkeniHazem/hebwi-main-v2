const mongoose = require("mongoose");

const schema = mongoose.Schema;

const TeamSchema = new schema({
    TOP: {
        type: Object,
        required: true
    },
    MID: {
        type: Object,
        required: true
    },
    Jungle: {
         type: Object,
         required: true
    },
    ADC: {
        type: Object,
        required: true
    },
    Support: {
        type: Object,
        required: true
    }

});
module.exports =  mongoose.model("team", TeamSchema);