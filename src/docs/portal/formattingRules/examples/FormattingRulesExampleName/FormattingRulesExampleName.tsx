import { Example } from '@consta/stand';
import React from 'react';

export const TextExampleName = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Для того, чтобы вариант в списке стал неактивным, Вы можете добавить к элементу массива items свойство disabled: true.',
          status: 'error',
        },
        {
          label: 'Правильно',
          description:
            'Чтобы сделать вариант в списке неактивным, добавьте к элементу массива items свойство disabled: true.',
          status: 'success',
        },
      ]}
    />
  );
};
