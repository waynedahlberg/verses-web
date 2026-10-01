import { useCallback, useState } from "react"

type UseControllableStateParams<T> = {
  defaultProp: T
  prop?: T
  onChange?: (value: T) => void
}

export function useControllableState<T>({
  defaultProp,
  prop,
  onChange,
}: UseControllableStateParams<T>): [T, (value: T) => void] {
  const [uncontrolled, setUncontrolled] = useState(defaultProp)
  const isControlled = prop !== undefined
  const value = isControlled ? prop : uncontrolled

  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) {
        setUncontrolled(next)
      }
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  return [value, setValue]
}
