import { Schema, model } from 'mongoose';

const testSchema = new Schema({
  name: String
});

const Test = model('Test', testSchema);

export default Test;