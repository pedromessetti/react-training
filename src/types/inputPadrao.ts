export interface inputPadrao {
    label?: string,
    name?: string,
    type?: "text" | "time" | "number",
    placeholder?: string,
    required: boolean,
    value: string | number | undefined,
    setValue: React.Dispatch<React.SetStateAction<string>>
}
