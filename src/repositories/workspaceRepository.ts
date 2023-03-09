import Repository from "./repository.ts";

interface IWorkspaceCreate {
    name: string;
    user_id: string;
}

export class WorkspaceRepository extends Repository {
    public async getAll(page: number) {
        return {
            data: await this.client().workspace.findMany(),
            pagination: {
                page,
            }
        };
    }

    public async create({ name, user_id }: IWorkspaceCreate) {
        return await this.client().workspace.create({
            data: { name, user_id },
        });
    }

    public async get(id: string) {
        return await this.client().workspace.findUnique({
            where: { id },
        });
    }

    public async update(id: string, data: IWorkspaceCreate) {
        return await this.client().workspace.update({
            where: { id }, data,
        })
    }

    public async delete(id: string) {
        return await this.client().workspace.delete({
            where: { id },
        });
    }
}
