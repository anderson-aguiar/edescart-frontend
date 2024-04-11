/* eslint-disable @typescript-eslint/no-explicit-any */

export const selectStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderColor: "var(--ed-color-card-border)",
    boxShadow: "none", "&:hover":{
        border: "none"
    },
    border: "none"
  }),
  placeholder: (baseStyles: any) => ({
    ...baseStyles,
    color: "var(--ed-color-font-placeholder)",
    padding: "0 10px"
  }),
  option: (baseStyles: any) => ({
    ...baseStyles,
    color: "var(--ed-color-font-secondary)",
  })
};
