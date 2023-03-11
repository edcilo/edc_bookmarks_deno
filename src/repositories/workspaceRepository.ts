import Repository from "./repository.ts";
import { paginationResponse } from "/common/index.ts";
import { TOrder, TOrderBy } from "/types/index.ts";

export type TWorkspaceOrderBy = TOrderBy | "name";
export type TWorkspaceCreate = {
  name: string;
  user_id: string;
};

export class WorkspaceRepository extends Repository {
  public async getAll(
    page: number,
    limit = 10,
    order_by: TWorkspaceOrderBy = "createdAt",
    order: TOrder = "desc",
  ) {
    const total = await this.client().workspace.count();
    const data = await this.client().workspace.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { [order_by]: order },
    });
    return paginationResponse(data, total, page, limit);
  }

  public async create({ name, user_id }: TWorkspaceCreate) {
    return await this.client().workspace.create({
      data: { name, user_id },
    });
  }

  public async get(id: string) {
    return await this.client().workspace.findUnique({
      where: { id },
    });
  }

  public async update(id: string, data: TWorkspaceCreate) {
    return await this.client().workspace.update({
      where: { id },
      data,
    });
  }

  public async delete(id: string) {
    return await this.client().workspace.delete({
      where: { id },
    });
  }
}
