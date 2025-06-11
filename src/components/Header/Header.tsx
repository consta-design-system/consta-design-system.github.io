/* eslint-disable no-nested-ternary */
import './Header.css';

import { IconComponent } from '@consta/icons/Icon';
import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

const cnHeader = cn('Header');

export type HeaderProps = PropsWithHTMLAttributesAndRef<
  {
    logo?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    logoLink?: string;
    menu?: {
      label: string;
      icon: IconComponent;
      link: string;
      onlyIcon: boolean;
      onClick?: React.MouseEventHandler;
    }[];
    children?: never;
  },
  HTMLDivElement
>;

export type HeaderComponent = (props: HeaderProps) => React.ReactNode;

export const Header: HeaderComponent = React.forwardRef((props, ref) => {
  const { logo: Logo, menu, className, logoLink, ...otherProps } = props;

  return (
    <header {...otherProps} ref={ref} className={cnHeader(null, [className])}>
      {Logo ? (
        logoLink ? (
          <a
            className={cnHeader('Logo')}
            href={logoLink}
            target="_blank"
            rel="noreferrer"
          >
            <Logo />
          </a>
        ) : (
          <div className={cnHeader('Logo')}>
            <Logo />
          </div>
        )
      ) : (
        <div className={cnHeader('Logo')} />
      )}

      <ul className={cnHeader('Menu')}>
        {menu &&
          menu.map(({ link, label, icon: Icon, onlyIcon, onClick }, index) => {
            return (
              <li key={index} className={cnHeader('Item')}>
                <Text
                  as="a"
                  size="s"
                  lineHeight="m"
                  view="primary"
                  href={link}
                  target="_blank"
                  className={cnHeader('Link', { onlyIcon })}
                  onClick={onClick}
                >
                  <Icon size="m" className={cnHeader('Icon')} />
                  {label}
                </Text>
              </li>
            );
          })}
      </ul>
    </header>
  );
});
