import './StandFooter.css';

import { breakpointsAtom } from '@consta/stand/src/modules/breakpoints';
import { libAtom } from '@consta/stand/src/modules/lib';
import { docsRepositoryUrlAtom } from '@consta/stand/src/modules/stand';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { addPrefix } from '@consta/uikit/useBreakpoints';
import { useComponentSize } from '@consta/uikit/useComponentSize';
import { useAtom } from '@reatom/npm-react';
import React, { useRef } from 'react';

import { StandFeedback } from '##/components/StandFeedback';
import { StandSurvey } from '##/components/StandSurvey';
import IconConsta from '##/icons/Consta.colorIcon.svg';
import { cn } from '##/utils/bem';

const gitHubUrl = 'https://github.com/consta-design-system/';

const cnStandFooter = cn('StandFooter');

export const StandFooter = () => {
  const [docsUrl] = useAtom(docsRepositoryUrlAtom);
  const repositoryUrl = useAtom(libAtom)[0]?.repositoryUrl;
  const [breakpoints] = useAtom(breakpointsAtom);
  const ref = useRef<HTMLDivElement>(null);
  const { height } = useComponentSize(ref);

  return (
    <>
      <StandFeedback />
      <StandSurvey />
      <div
        ref={ref}
        className={cnStandFooter(addPrefix(breakpoints), [
          breakpoints.m
            ? cnMixSpace({ pV: 's', pH: '2xl' })
            : cnMixSpace({ pV: 'xl', pH: '2xl' }),
        ])}
        style={{ ['--footer-height' as string]: `${height}px` }}
      >
        {!breakpoints.s && (
          <IconConsta className={cnStandFooter('MobileIcon')} size="m" />
        )}
        <Text className={cnStandFooter('Label')} size="s" lineHeight="xs">
          {breakpoints.s && <IconConsta size="s" />}
          Открытая дизайн-система
        </Text>
        <Text
          display="block"
          as="a"
          view="link"
          href={docsUrl || repositoryUrl || gitHubUrl}
          size="s"
          lineHeight="m"
          target="_blank"
        >
          {docsUrl
            ? 'Эта страница на GitHub'
            : 'В открытом доступе с 2021 года'}
        </Text>
      </div>
    </>
  );
};
