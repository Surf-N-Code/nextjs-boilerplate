'use client';

import { CldImage } from 'next-cloudinary';

const Image = ({ publicId, ...rest }) => {
  return <CldImage src={publicId} alt="" format="auto" {...rest} />;
};

export default Image;
