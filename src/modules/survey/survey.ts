import { withSessionStorage } from '@reatom/persist-web-storage';
import { reatomBoolean } from '@reatom/primitives';

export const surveyVisibleAtom = reatomBoolean(true).pipe(
  withSessionStorage('surveyVisibleAtom'),
);
