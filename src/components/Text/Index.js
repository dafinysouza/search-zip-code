import React from 'react';

const Text = ({ children, tag }) => {
  const Tag = tag;
  return <Tag>{children}</Tag>;
};

export default Text;
