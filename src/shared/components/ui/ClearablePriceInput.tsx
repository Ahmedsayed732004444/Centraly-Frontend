import { UseFormRegisterReturn, UseFormSetValue, FieldPath, FieldValues } from 'react-hook-form';

interface ClearablePriceInputProps<T extends FieldValues> {
  registration: UseFormRegisterReturn;
  setValue: UseFormSetValue<T>;
  name: FieldPath<T>;
  currentValue: number | undefined;
  className?: string;
}

/** Clears default 0 on focus so the user can type a clean price; restores 0 if left empty. */
export function ClearablePriceInput<T extends FieldValues>({
  registration,
  setValue,
  name,
  currentValue,
  className,
}: ClearablePriceInputProps<T>) {
  const { onBlur, onChange, ...rest } = registration;

  return (
    <input
      type="number"
      min="0"
      step="1"
      className={className}
      {...rest}
      onChange={onChange}
      onFocus={(e) => {
        if (currentValue === 0 || e.target.value === '0') {
          // @ts-ignore
          setValue(name, '', { shouldDirty: true });
        } else {
          e.target.select();
        }
      }}
      onBlur={(e) => {
        onBlur(e);
        if (e.target.value === '' || Number.isNaN(e.target.valueAsNumber)) {
          // @ts-ignore
          setValue(name, 0, { shouldValidate: true });
        }
      }}
    />
  );
}
