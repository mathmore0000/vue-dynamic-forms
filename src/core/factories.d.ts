import { InputBase, TextInput, EmailInput, PasswordInput, CheckboxInput, ColorInput, RadioInput, NumberInput, SelectInput, CustomInput, FormControl, FormValidator, ValidationTrigger, TextAreaInput, UrlInput } from './models';
export declare const FieldBase: ({ validations, label, ariaLabel, ariaLabelledBy, customClass, customStyles, disabled, placeholder, autocomplete, readonly, validationTrigger, }: InputBase) => InputBase;
export declare const TextField: ({ value, ...rest }: Partial<TextInput>) => TextInput;
export declare const TextAreaField: ({ value, cols, rows, ...rest }: Partial<TextAreaInput>) => TextAreaInput;
export declare const EmailField: ({ value, ...rest }: Partial<EmailInput>) => EmailInput;
export declare const PasswordField: ({ value, ...rest }: Partial<PasswordInput>) => PasswordInput;
export declare const UrlField: ({ value, ...rest }: Partial<UrlInput>) => UrlInput;
export declare const CheckboxField: ({ value, ...rest }: Partial<CheckboxInput>) => CheckboxInput;
export declare const ColorField: ({ value, ...rest }: Partial<ColorInput>) => ColorInput;
export declare const RadioField: ({ options, value, ...rest }: Partial<RadioInput>) => RadioInput;
export declare const NumberField: ({ value, min, max, step, ...rest }: Partial<NumberInput>) => NumberInput;
export declare const SelectField: ({ options, value, optionValue, optionLabel, ...rest }: Partial<SelectInput>) => SelectInput;
export declare const CustomField: ({ value, ...rest }: Partial<CustomInput>) => CustomInput;
export declare const FieldControl: ({ name, type, ...rest }: Partial<FormControl<any>>) => FormControl<any>;
export declare const Validator: ({ validator, text, }: FormValidator) => FormValidator;
export declare const ValidatorTrigger: ({ type, threshold, }: ValidationTrigger) => ValidationTrigger;
