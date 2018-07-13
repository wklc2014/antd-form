/**
 * 单行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

export default function MyInput(props) {
  const {
    api,
    // ext,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    value,
    onChange: e => onChange(e.target.value),
  };

  return <Input {...newProps} />;
}

MyInput.propTypes = {
  api: propTypes.object,
  // ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
  ]),
}

MyInput.defaultProps = {
  api: {},
  // ext: {},
  value: '',
}