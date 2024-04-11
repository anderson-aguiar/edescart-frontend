/* eslint-disable @typescript-eslint/no-explicit-any */

export default function FormInput(props: any) {
    const { validation, invalid = "false", dirty = "false", onTurnDirty, ...inputProps } = props;

    function handleBlur(){
        onTurnDirty(props.name);
    }
    return (
        <input {...inputProps} data-invalid={invalid} data-dirty={dirty} onBlur={handleBlur}/>
    );
}