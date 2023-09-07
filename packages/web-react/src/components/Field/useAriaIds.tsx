import { useCallback, useState } from 'react';

export type RegisterParams = { add?: string; remove?: string };
export type RegisterType = (params: RegisterParams) => void;
export type UseAriaIdsHook = (otherAriaIds?: string) => [string[], RegisterType];

const useAriaIds: UseAriaIdsHook = (otherAriaIds) => {
  const [ids, setIds] = useState<string[]>(otherAriaIds ? otherAriaIds.split(' ') : []);

  const register = useCallback(({ add, remove }: RegisterParams) => {
    setIds((prevIds) => {
      let newIds = [...prevIds];

      if (remove) {
        newIds = newIds.filter((item) => item !== remove);
      }

      if (add) {
        newIds = [...newIds, add];
      }

      return newIds;
    });
  }, []);

  return [ids, register];
};

export default useAriaIds;
