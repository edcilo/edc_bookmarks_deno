import { RouterMiddleware } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { WorkspaceRepository } from "../repositories/index.ts";

export class WorkspaceController {
    private workspaceRepo: WorkspaceRepository;

    constructor() {
        this.workspaceRepo = new WorkspaceRepository();
    }

    public getAll: RouterMiddleware<string> = ({ response, request }) => {
        const page = request.url.searchParams.get('page') || '1';
        response.status = 200;
        response.body = this.workspaceRepo.getAll(+page);
    }

    public create: RouterMiddleware<string> = async ({ response, request }) => {
        const data = await request.body().value;
        response.status = 200;
        response.body = this.workspaceRepo.create(data);
    }

    public get: RouterMiddleware<string> = ({params, response}) => {
        const { id } = params;
        response.status = 200;
        response.body = this.workspaceRepo.get(id);
    }

    public update: RouterMiddleware<string> = async ({ params, request, response}) => {
        const { id } = params;
        const data = await request.body().value;
        response.status = 202;
        response.body = this.workspaceRepo.update(id, data);
    }

    public delete: RouterMiddleware<string> = ({ params, response}) => {
        const { id } = params;
        this.workspaceRepo.delete(id);
        response.status = 204;
    }
}
