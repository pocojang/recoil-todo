import { useRecoilTransactionObserver_UNSTABLE } from 'recoil';

import { todoListState } from '@/store/atoms';

function RecoilTransactionObserver() {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    const atomLoadable = snapshot.getLoadable(todoListState);

    if (atomLoadable.state === 'hasValue') {
      window.localStorage.setItem(
        'recoil-todo',
        JSON.stringify({ value: atomLoadable.contents }),
      );
    }
  });

  return null;
}

export { RecoilTransactionObserver };
