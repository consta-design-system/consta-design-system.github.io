import './AddComponentData.css';

import { Badge } from '@consta/uikit/Badge';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

const cnAddComponentData = cn('AddComponentData');

export const AddComponentDataStage1 = () => {
  return (
    <div className={cnAddComponentData()}>
      <div>
        <Badge label="Этап 1" />
        <Text
          weight="bold"
          className={cnAddComponentData('Text')}
          lineHeight="m"
        >
          Принимаем решение
        </Text>
      </div>
      <ol>
        <li>
          Оцениваем популярность компонента: смотрим, есть ли еще запросы на его
          разработку.
        </li>
        <li>
          Составляем описание API и описываем, как компонент будет
          использоваться — на примерах, чтобы лучше понимать, как всё работает и
          зачем это нужно.
        </li>
        <li>
          Смотрим, что уже готово: если вы прислали PR, проверяем его, смотрим,
          есть ли в нём примеры использования и тесты.
        </li>
      </ol>
      <Text size="s" lineHeight="m">
        После этого этапа становится понятно, что это за компонент и нужно ли
        его добавлять в дизайн-систему.
      </Text>
      <Text size="s" lineHeight="m">
        Договариваемся, кто его разрабатывает — вы или команда Consta.
      </Text>
    </div>
  );
};

export const AddComponentDataStage2 = () => {
  return (
    <div className={cnAddComponentData()}>
      <div>
        <Badge label="Этап 2" />
        <Text weight="bold" className={cnAddComponentData('Text')}>
          Разрабатываем и обсуждаем новый компонент
        </Text>
      </div>
      <ol>
        <li>Разрабатываем компонент в дизайне и в коде.</li>
        <li>Приглашаем сообщество к обсуждению.</li>
      </ol>
    </div>
  );
};

export const AddComponentDataStage3 = () => {
  return (
    <div className={cnAddComponentData()}>
      <div>
        <Badge label="Этап 3" />
        <Text weight="bold" className={cnAddComponentData('Text')}>
          Проверяем готовый компонент и проводим ревью
        </Text>
      </div>
      <ol>
        <li>Проводим ревью кода и устраняем все замечания.</li>
        <li>
          Команда дизайн-системы подтверждает, что компонент можно включить в
          состав основной библиотеки.
        </li>
      </ol>
    </div>
  );
};

export const AddComponentDataStage4 = () => {
  return (
    <div className={cnAddComponentData()}>
      <div>
        <Badge label="Этап 4" />
        <Text weight="bold" className={cnAddComponentData('Text')}>
          Публикуем релиз
        </Text>
      </div>
      <ol>
        <li>Собираем релизный пакет для выкладки.</li>
        <li>Публикуем информацию о релизе.</li>
      </ol>
    </div>
  );
};
