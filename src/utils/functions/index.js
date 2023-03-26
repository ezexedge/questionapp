export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export const sumTotal = (items) =>
  items?.map((item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0);

export const getDate = (date1) => {
  const date = new Date(date1);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  const withSlashes = [year, month, day].join('/');
  return withSlashes;
};
