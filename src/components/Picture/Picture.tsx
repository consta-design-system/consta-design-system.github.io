import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { useTheme } from '@consta/uikit/Theme';
import React from 'react';

type PicturePropSrcMode1 = {
  [key: string]: { [key: string]: string } | string;
};

type PicturePropSrcMode2 = {
  [key: string]: { [key: number]: { [key: string]: string } | string };
};

type PicturePropSrcMode3 = {
  [key: string]: { [key: string]: { [key: string]: string } | string };
};

export type PictureProps = {
  alt?: string;
  title?: string;
} & (
  | {
      mode?: 1;
      src: PicturePropSrcMode1;
    }
  | {
      mode: 2;
      src: PicturePropSrcMode2;
    }
  | {
      mode: 3;
      src: PicturePropSrcMode3;
    }
);

type Props = PropsWithHTMLAttributesAndRef<PictureProps, HTMLPictureElement>;

type PictureComponent = (props: Props) => React.ReactNode;

// eslint-disable-next-line react/display-name
export const Picture: PictureComponent = React.forwardRef((props, ref) => {
  const { alt, title, src, mode = 1, ...otherProps } = props;
  const { theme } = useTheme();

  const image = src[theme.color.primary];
  if (!image) {
    return null;
  }

  if (mode === 1) {
    const images = image as { [key: string]: string } | string;

    if (typeof images === 'string') {
      return <img src={images as string} alt={alt} title={title} />;
    }

    const keys = Object.keys(images).sort();
    const srcSet = keys.map((key) => `${images[key]} ${key}`).join(',');

    return (
      <picture {...otherProps} ref={ref}>
        <img src={images[keys[0]]} srcSet={srcSet} alt={alt} title={title} />
      </picture>
    );
  }

  if (mode === 2) {
    const images = image as {
      [key: string]: { [key: string]: string } | string;
    };
    const noSortKeys = Object.keys(images) as unknown as string[];
    const keys = noSortKeys.sort((a, b) => Number(b) - Number(a));
    const defautlImageKey = '0';

    const getDefaultImageSrc = () => {
      const src = images[defautlImageKey];
      if (!src) {
        return {};
      }

      if (typeof src === 'string') {
        return { src };
      }

      const srcSetKeys = Object.keys(src).sort() as unknown as string[];
      return {
        src: src[srcSetKeys[0]],
        srcSet: srcSetKeys.map((key) => `${src[key]} ${key}`).join(','),
      };
    };

    const { src, srcSet } = getDefaultImageSrc();

    return (
      <picture {...otherProps} ref={ref}>
        {keys.map((key) => {
          if (key === defautlImageKey) {
            return null;
          }

          const src = images[key];
          if (typeof src === 'string') {
            return (
              <source key={key} media={`(min-width: ${key}px)`} src={src} />
            );
          }

          const srcSet = Object.keys(src)
            .map((srckey) => `${src[srckey]} ${srckey}`)
            .join(',');

          return (
            <source key={key} media={`(min-width: ${key}px)`} srcSet={srcSet} />
          );
        })}

        <img src={src} srcSet={srcSet} alt={alt} title={title} />
      </picture>
    );
  }

  if (mode === 3) {
    const images = image as {
      [key: string]: { [key: string]: string } | string;
    };
    const keys = Object.keys(images) as unknown as string[];
    const defautlImageKey = 'default';

    const getDefaultImageSrc = () => {
      const src = images[defautlImageKey];
      if (!src) {
        return {};
      }
      if (typeof src === 'string') {
        return { src };
      }
      const srcSetKeys = Object.keys(src).sort() as unknown as string[];
      return {
        src: src[srcSetKeys[0]],
        srcSet: srcSetKeys.map((key) => `${src[key]} ${key}`).join(','),
      };
    };

    const { src, srcSet } = getDefaultImageSrc();

    return (
      <picture {...otherProps} ref={ref}>
        {keys.map((key) => {
          if (key === defautlImageKey) {
            return null;
          }
          const src = images[key];
          if (typeof src === 'string') {
            return <source key={key} media={key} src={src} />;
          }

          const srcSet = Object.keys(src)
            .map((srckey) => `${src[srckey]} ${srckey}`)
            .join(',');

          return <source key={key} media={key} srcSet={srcSet} />;
        })}

        <img src={src} srcSet={srcSet} alt={alt} title={title} />
      </picture>
    );
  }

  return null;
});
