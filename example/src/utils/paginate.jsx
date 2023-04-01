import _ from "lodash";

export const paginate = (items, pageNumber, pageSize) => {
  const startIndext = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndext).take(pageSize).value();
  
};