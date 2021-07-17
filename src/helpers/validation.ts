export const required = (val: string) => {
  if (!val) throw new Error(`your ${val} is a required field`);
};

export const isEmail = (val: string) => {};
