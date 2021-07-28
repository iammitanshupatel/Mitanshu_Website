import { Cloudinary } from '@cloudinary/base';

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'mitanshucloud',
  },
});
