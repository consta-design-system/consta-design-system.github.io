import { Example } from '@consta/stand';
import React from 'react';

export const Alternative = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Нет',
          description: 'Хоткей',
          status: 'error',
        },
        {
          label: 'Да',
          description: 'Горячая клавиша',
          status: 'success',
        },
      ]}
    />
  );
};

export const RoleOfTheElement = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Нет',
          description: 'Ховер эффект',
          status: 'error',
        },
        {
          label: 'Да',
          description: 'Эффект «hover»',
          status: 'success',
        },
      ]}
    />
  );
};
