interface IWorkspaceCreate {
    name: string;
}

export class WorkspaceRepository {
    public getAll(page: number) {
        return {
            data: [], 
            pagination: {
                page,
            }
        };
    }

    public create(data: IWorkspaceCreate) {
        return data;
    }

    public get(id: string) {
        return {
            id,
        };
    }

    public update(id: string, data: IWorkspaceCreate) {
        return {
            id,
            ...data,
        };
    }

    public delete(id: string) {
        return {
            id,
        };
    }
}
