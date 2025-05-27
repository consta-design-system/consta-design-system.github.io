import '##/modules/spa';

import {
  footerConfig,
  libsPageConfig,
  ListCardBanner,
  ListCardBig,
  ListCardList,
} from '@consta/stand';

import { StandFooter } from '##/components/StandFooter';

import description from './standsDescription.mdx';

libsPageConfig({
  title: 'Обзор',
  description,
  extractLibs: ['portal'],
  groups: [
    {
      sortOrder: 1,
      label: 'Начало работы',
      maxCount: 2,
    },
    {
      label: 'Гайдлайны',
      maxCount: 4,
      renderList: ListCardList,
      buttonMore: true,
      sortOrder: 1,
    },
    {
      label: 'Тематизация',
      maxCount: 0,
      hiddenLabel: true,
      sortOrder: 3,
    },
    {
      label: 'Контрибьюторам',
      renderList: ListCardBanner,
      maxCount: 1,
      sortOrder: 4,
    },
    {
      label: 'Библиотеки',
      description:
        'Готовые блоки, большой набор адаптивных компонентов, графиков и мобильные UI-киты.',
      renderList: ListCardBig,
      sortOrder: 5,
      initialOpen: true,
    },
    {
      label: 'Специальные компоненты',
      description:
        'Компоненты для аналитики, примеры использования карт, а также инфографика.',
      renderList: ListCardBig,
      sortOrder: 6,
      maxCount: 2,
      buttonMore: true,
      initialOpen: true,
    },
    {
      label: 'Адаптеры',
      description:
        'Адаптеры для стилизации таблиц, диаграмм, календаря и других компонентов для Consta.',
      renderList: ListCardBig,
      sortOrder: 7,
      maxCount: 2,
      buttonMore: true,
      initialOpen: true,
    },
    {
      label: 'Портал',
      maxCount: 0,
      hiddenLabel: true,
      sortOrder: 50,
    },
  ],
});

footerConfig({ copmonent: StandFooter });
