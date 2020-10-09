import mongoose from 'mongoose';
import options from './config';

const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

export default connect;
