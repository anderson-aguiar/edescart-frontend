/* eslint-disable @typescript-eslint/no-explicit-any */

export default function FormInput(props: any) {
    const { validation, invalid, ...inputProps } = props;
    return (
        <input {...inputProps} data-invalid={invalid}/>
    );
}