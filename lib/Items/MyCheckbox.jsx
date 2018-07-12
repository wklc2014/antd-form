/**
 * 多选框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

export default function MyCheckbox(props) {
  const {
    api,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    value,
    onChange,
  };

  return <CheckboxGroup {...newProps} />;
}

MyCheckbox.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.array,
}

MyCheckbox.defaultProps = {
  api: {},
  value: [],
}
