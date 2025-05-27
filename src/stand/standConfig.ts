import { createConfig } from '@consta/stand';

export const { createStand, createPage } = createConfig({
  title: 'Документация дизайн-системы',
  id: 'portal',
  groups: [
    {
      title: 'Начало работы',
      id: 'startwork',
      description:
        'Первое знакомство с дизайн-системой Consta: установка и использование, возможности и визуальные принципы.',
    },
    {
      title: 'Гайдлайны',
      id: 'guidelines',
      description:
        'Руководства и инструкции по работе с Consta, её кодом и дизайн-библиотеками.',
    },
    {
      title: 'Тематизация',
      id: 'theme',
    },
    {
      title: 'Контрибьюторам',
      id: 'contributers',
    },
    {
      title: 'Портал',
      id: 'portal',
    },
  ],
  group: 'Общая документация',
  order: 1,
  description:
    'Статьи о дизайн-системе и о том, как с ней работать — всё о темах, новых компонентах и контрибьюторах.  ',
  repositoryUrl: 'https://github.com/consta-design-system/portal',
});
