import { Example } from '@consta/stand';
import { Text } from '@consta/uikit/Text';
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

export const TextExampleName2 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Поля с разными статусами и разной формы будут выглядеть одинаково, при использовании вида view="clear", который используется в случаях, когда нужно создать кастомное поле ввода или обернуть его в контейнер.',
          status: 'error',
        },
        {
          label: 'Правильно',
          description:
            'Вид view="clear" используется, чтобы создать кастомное поле ввода или обернуть его в контейнер. При этом поля с разными статусами и формами будут выглядеть одинаково.',
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName3 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: (
            <>
              <br />
              <Text weight="bold" size="s" lineHeight="m">
                Это заголовок
              </Text>
              <Text view="secondary" size="s" lineHeight="m">
                Это карточка, в которой ничего нет, кроме текста. Здесь может
                быть что угодно.
              </Text>
            </>
          ),
          status: 'error',
        },
        {
          label: 'Правильно',
          description: (
            <>
              <br />
              <Text weight="bold" size="s" lineHeight="m">
                Клонирование репозитория
              </Text>
              <Text view="secondary" size="s" lineHeight="m">
                Для клонирования репозитория нужно ввести команду git clone и
                указать его адрес. Репозиторий клонируется в текущую выбранную
                папку в консоли.
              </Text>
            </>
          ),
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName4 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: (
            <>
              <br />
              <Text weight="bold" size="s" lineHeight="m">
                Это самый настоящий коллапс
              </Text>
              <Text view="secondary" size="s" lineHeight="m">
                Здесь может быть что угодно. Например, этот текст. Но не
                обязательно: вы можете добавить иконки, кнопки, картинки или
                даже мини-игру (ну вдруг). Удивительная штука: никогда не
                угадаешь, что прячется под этим заголовком.
              </Text>
            </>
          ),
          status: 'error',
        },
        {
          label: 'Правильно',
          description: (
            <>
              <br />
              <Text weight="bold" size="s" lineHeight="m">
                Отсортировать коммиты по автору
              </Text>
              <Text view="secondary" size="s" lineHeight="m">
                Чтобы вывести список коммитов, отфильтрованных по автору,
                следует воспользоваться следующей командой git log
              </Text>
            </>
          ),
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName5 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Иконку можно расположить слева или справа от заголовка с помощью свойства iconPosition.',
          status: 'error',
        },
        {
          label: 'Правильно',
          description:
            'Расположите иконку слева или справа от заголовка с помощью свойства iconPosition.',
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName6 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Все, что вы хотите показать внутри окна, поместите в контейнер <Sidebar></Sidebar>.',
          status: 'error',
        },
        {
          label: 'Правильно',
          description:
            'Всё, что вы хотите показать внутри окна, поместите в контейнер <Sidebar></Sidebar>.',
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName7 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: 'mergeCells - объединяет одинаковые ячейки в колонке.',
          status: 'error',
        },
        {
          label: 'Правильно',
          description: 'mergeCells — объединяет одинаковые ячейки в колонке.',
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName8 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: 'Температура 10 - 12 градусов',
          status: 'error',
        },
        {
          label: 'Правильно',
          description: 'Температура 10-12 градусов',
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName9 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: '12 декабря 1991-27 декабря 1997',
          status: 'error',
        },
        {
          label: 'Правильно',
          description: '12 декабря 1991 — 27 декабря 1997',
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName10 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'С пробелами',
          description: '12 - 4 = 8',
        },
        {
          label: 'Без пробела',
          description: '-18 градусов',
        },
      ]}
    />
  );
};

export const TextExampleName11 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description: 'Черно - белый цвет',
          status: 'error',
        },
        {
          label: 'Правильно',
          description: 'Черно-белый цвет',
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName12 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'Если изменения в локальном репозитории не важны, то с помощью команды git reset можно “откатиться” к конкретному коммиту в истории.',
          status: 'error',
        },
        {
          label: 'Правильно',
          description:
            'Если изменения в локальном репозитории не важны, «откатиться» к конкретному коммиту в истории можно с помощью команды git reset ',
          status: 'success',
        },
      ]}
    />
  );
};

export const TextExampleName13 = () => {
  return (
    <Example
      col={{ 1: 0, 2: 800 }}
      separately
      items={[
        {
          label: 'Неправильно',
          description:
            'В марте 2020 года в ПАО "Газпром нефть" началась разработка собственной дизайн-системы “Consta”.',
          status: 'error',
        },
        {
          label: 'Правильно',
          description:
            'В марте 2020 года в ПАО «Газпром нефть» началась разработка собственной дизайн-системы Consta.',
          status: 'success',
        },
      ]}
    />
  );
};
