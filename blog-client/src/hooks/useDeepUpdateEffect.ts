import { useRef } from 'react';
import { useUpdateEffect } from 'ahooks';
import isDeepEqual from 'fast-deep-equal';

/**
 * @description useEffect的深比较版本，使用ref来缓存上一次的deps，通过标志位sinalRef来记录effect执行的次数
 * @ref https://github.com/kentcdodds/use-deep-compare-effect
 */

const useDeepCompare = (deps: React.DependencyList) => {
  const previousDeps = useRef<React.DependencyList>();
  const sinalRef = useRef(0);

  if (!isDeepEqual(previousDeps.current, deps)) {
    previousDeps.current = deps;
    sinalRef.current += 1;
  }

  return [sinalRef.current];
};

const useDeepUpdateEffect = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
) => { useUpdateEffect(effect, useDeepCompare(deps)); };

export default useDeepUpdateEffect;
