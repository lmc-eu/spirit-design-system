export const timestamp = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  return `${year}-${month}-${day}`;
};

export const month = () => new Date().toLocaleString('en-US', { month: 'long' });
