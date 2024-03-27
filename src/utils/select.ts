/* eslint-disable @typescript-eslint/no-explicit-any */

export const selectStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    borderColor: "var(--ed-color-card-border)",
    boxShadow: "none", "&:hover":{
        border: "none"
    }
  }),
  placeholder: (baseStyles: any) => ({
    ...baseStyles,
    color: "var(--ed-color-font-placeholder)",
  }),
  option: (baseStyles: any) => ({
    ...baseStyles,
    color: "var(--ed-color-font-secondary)",
  })
};
