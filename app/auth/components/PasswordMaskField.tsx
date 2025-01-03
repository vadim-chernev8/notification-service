'use client';
import { useState, useCallback, ChangeEvent } from 'react';
import { TextField } from "@radix-ui/themes";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export default function PasswordMaskField<T>(props: T) {
  const [isMaskAvailable, setMaskToggle] = useState(true);
  const [value, setValue] = useState('');

  const handleMaskChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [isMaskAvailable]);

  const toggleMask = useCallback(() => setMaskToggle(!isMaskAvailable), [isMaskAvailable]);
  return (
    <TextField.Root
      onChange={handleMaskChange}
      type={isMaskAvailable ? 'password' : 'text'}
      placeholder="Search the docs…"
      value={value}
      {...props}
    >
      <TextField.Slot side="right" onClick={toggleMask}>
        {isMaskAvailable ? <EyeOpenIcon height="16" width="16" /> : <EyeNoneIcon height="16" width="16" />}
      </TextField.Slot>
    </TextField.Root>
  )
};
