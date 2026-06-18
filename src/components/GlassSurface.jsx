import React from 'react';

const GlassSurface = ({
  children,
  className = '',
  style = {},
  heavy = false,
  as: Tag = 'div',
  onClick,
  ...rest
}) => {
  const blurVal = heavy ? 'var(--glass-blur-heavy)' : 'var(--glass-blur)';

  return (
    <Tag
      className={`glass ${className}`}
      style={{
        '--blur': blurVal,
        backdropFilter: `blur(${blurVal}) url(#glass-distortion)`,
        WebkitBackdropFilter: `blur(${blurVal})`,
        ...style,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default GlassSurface;
