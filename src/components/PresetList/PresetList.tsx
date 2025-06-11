import './PresetList.css';

import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { useChoiceGroup } from '@consta/uikit/useChoiceGroup';
import React from 'react';

import { cn } from '##/utils/bem';

export const cnPresetList = cn('PresetList');

type PresetListProps<ITEM> = {
  value: ITEM;
  items: ITEM[];
  getLabel: (item: ITEM) => string;
  getBrandColor: (item: ITEM) => string;
  onChange: (
    value: ITEM,
    props: {
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    },
  ) => void;
  className?: string;
};

type Props<ITEM> = PropsWithHTMLAttributesAndRef<
  PresetListProps<ITEM>,
  HTMLDivElement
>;

type PresetListComponent = <ITEM>(props: Props<ITEM>) => React.ReactNode;

export const PresetList: PresetListComponent = React.forwardRef(
  (props, ref) => {
    const {
      value = null,
      items,
      getLabel,
      onChange,
      className,
      getBrandColor,
      ...otherProps
    } = props;

    const { getOnChange, getChecked } = useChoiceGroup<
      typeof items[number],
      React.MouseEvent<HTMLButtonElement, MouseEvent>
    >({ value, getKey: getLabel, callBack: onChange, multiple: false });

    return (
      <div
        {...otherProps}
        ref={ref}
        className={cnPresetList(null, [className])}
      >
        <div className={cnPresetList('Wrapper')}>
          {items.map((item) => (
            <button
              className={cnPresetList('Item', { checked: getChecked(item) })}
              key={getLabel(item)}
              onClick={getOnChange(item)}
              style={{ ['--brandColor' as any]: getBrandColor(item) }}
              type="button"
            >
              {getLabel(item)}
            </button>
          ))}
        </div>
      </div>
    );
  },
);
