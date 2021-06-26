import axios from './axios';

const fetcher = async (...args) => {
  const res = await axios(...args);
  return res.data;
};

export default fetcher;
