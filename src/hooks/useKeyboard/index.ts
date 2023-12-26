import { useEffect, useState } from "react"

// Types
import { useKeyboardProps } from './useKeyboard.types';

export const useKeyboard = (): useKeyboardProps => {
  const [keyboardEvent, setKeyboardEvent] = useState<(this: Document, ev: KeyboardEvent) => any>()

  const handleSetKeyboardEvent = (event: (this: Document, ev: KeyboardEvent) => any) => {
    setKeyboardEvent(event);
    document.addEventListener('keydown', event, true);
  }

  useEffect(() => {
    return () => {
      if(keyboardEvent) {
        document.removeEventListener('keydown', keyboardEvent);
      }
    }
  }, [keyboardEvent])

  return {
    setKeyboardEvent: handleSetKeyboardEvent,
  }
}
