import './StandSurvey.css';

import { classnames } from '@bem-react/classnames';
import { IconChatFilled } from '@consta/icons/IconChatFilled';
import { IconClose } from '@consta/icons/IconClose';
import { lastBreakpointAtom } from '@consta/stand/src/modules/breakpoints';
import { Banner } from '@consta/uikit/Banner';
import { Button } from '@consta/uikit/Button';
import { cnMixFlex } from '@consta/uikit/MixFlex';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { presetGpnDark, Theme } from '@consta/uikit/Theme';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { memo } from 'react';

import { surveyVisibleAtom } from '##/modules/survey';
import { cn } from '##/utils/bem';

const cnStandSurvey = cn('StandSurvey');

export const StandSurvey = memo(() => {
  const [visible] = useAtom(surveyVisibleAtom);
  const unVisible = useAction(surveyVisibleAtom.setFalse);
  const [point] = useAtom(lastBreakpointAtom);

  if (!visible) {
    return null;
  }

  return (
    <Theme className={cnStandSurvey()} preset={presetGpnDark}>
      <div className={cnStandSurvey('Wrapper')}>
        <Banner
          view="transparent"
          className={cnStandSurvey('Banner')}
          space={point === 'xs' ? undefined : { p: 'l', pL: 'xl' }}
          leftSide={
            point === 'xs' ? (
              <Text size="m" weight="bold">
                Опрос вошёл в&nbsp;чат
              </Text>
            ) : (
              <>
                <div
                  className={classnames(
                    cnMixFlex({ flex: 'flex', gap: 's' }),
                    cnMixSpace({ mB: 's' }),
                  )}
                >
                  <IconChatFilled />
                  <Text size="l" weight="bold">
                    Опрос вошёл в чат
                  </Text>
                </div>
                <Text size="l">
                  Поделитесь своими впечатлениями и&nbsp;предложениями
                  в&nbsp;коротком опросе
                </Text>
              </>
            )
          }
          rightSide={[
            <Button
              size={point === 'xs' ? 's' : 'm'}
              className={cnStandSurvey('Button')}
              form="round"
              label="Пройти опрос"
              view="ghost"
              as="a"
              href="http://opros.so/q6NVd"
              onClick={unVisible}
              target="_blank"
            />,
            <Button
              size={point === 'xs' ? 's' : 'm'}
              className={cnStandSurvey('Button')}
              form="round"
              label="Закрыть"
              onlyIcon
              iconLeft={IconClose}
              view="clear"
              onClick={unVisible}
            />,
          ]}
        />
      </div>
    </Theme>
  );
});
