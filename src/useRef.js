import { useState } from 'react';

export function useRefHook(defaultValue = null) {
  const [ref] = useState(() => ({ current: defaultValue }));

  return ref;
}
