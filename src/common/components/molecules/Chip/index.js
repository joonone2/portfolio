import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function Chip({
  text = '',
  color = '',
  fill = true,
  size = 'SM',
  backgroundColor,
  borderColor,
  textColor,
  noBorder,
  className,
  style,
  ...props
}) {
  return (
    <div
      className={cx(
        'chip',
        `chip-${size}`,
        fill && `chip-fill`,
        color && `chip${color}`,
        size === 'MD' ? 'bodyMD' : size === 'LG' ? 'title2MD' : 'captionMD',
        className,
      )}
      style={{
        backgroundColor: backgroundColor ?? 'transparent',
        color: textColor,
        border: noBorder && 0,
        borderColor: borderColor,
        ...style,
      }}
      {...props}
    >
      {typeof text === 'function' ? text() : text}
    </div>
  );
}
export default Chip;
