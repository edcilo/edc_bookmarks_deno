export const paginationMeta = (page: number, limit: number, total: number) => {
  return {
    total,
    page,
    prev: page > 1 ? page - 1 : null,
    next: page < Math.ceil(total / limit) ? page + 1 : null,
  };
};

export const paginationResponse = (
  data: Array<unknown>,
  total: number,
  page: number,
  limit: number,
) => {
  return {
    data,
    pagination: paginationMeta(page, limit, total),
  };
};
