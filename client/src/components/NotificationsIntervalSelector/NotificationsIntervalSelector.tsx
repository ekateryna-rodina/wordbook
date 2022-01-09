import React from 'react';
import Select from 'react-select';
import { useAppSelector } from '../../app/hooks';
import { theme } from '../../globalStyles';

const NotificationsIntervalSelector = () => {
  const options = [
    { value: 30, label: '30M' },
    { value: 60, label: '1H' },
    { value: 120, label: '2H' },
    { value: 240, label: '4H' },
    { value: 480, label: '8H' },
  ];
  const defaultNotificationsInterval = useAppSelector(
    (state) => state.settings.notificationsInterval
  );
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? theme.colors.white : theme.colors.primary,
      background: state.isSelected
        ? theme.colors.primary
        : state.isFocused
        ? theme.colors.highlight
        : theme.colors.white,
    }),
    control: (provided: any, state: any) => {
      const borderRadius = '1.2rem';
      const fontSize = '1rem';
      const color = theme.colors.primary;
      const borderColor = state.isFocused ? theme.colors.primary : `${color}33`;
      const boxShadow = state.isFocused ? `0 0 0 1px ${color}` : 'none';

      return {
        ...provided,
        borderRadius,
        fontSize,
        color,
        borderColor,
        boxShadow,
      };
    },
    noOptionsMessage: (provided: any, state: any) => {
      const color = `${theme.colors.primary}87`;
      return { ...provided, color };
    },
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      const color = theme.colors.primary;

      return { ...provided, opacity, transition, color };
    },
    dropdownIndicator: (provided: any, state: any) => {
      const color = `${theme.colors.primary}33`;
      return { ...provided, color };
    },
    indicatorSeparator: (provided: any, state: any) => {
      const display = 'none';
      return { ...provided, display };
    },
  };

  const getDefaultLabel = () => {
    return Object.values(options).filter(
      (o) => o.value === defaultNotificationsInterval
    )[0].label;
  };
  return (
    <Select
      options={options}
      styles={customStyles}
      defaultValue={{
        label: getDefaultLabel(),
        value: defaultNotificationsInterval,
      }}
    />
  );
};

export default NotificationsIntervalSelector;
