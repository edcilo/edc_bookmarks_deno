import { RouterMiddleware } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { WorkspaceRepository } from "../repositories/index.ts";

export class WorkspaceController {
    private workspaceRepo: WorkspaceRepository;

    constructor() {
        this.workspaceRepo = new WorkspaceRepository();
    }

    public getAll: RouterMiddleware<string> = async ({ response, request }) => {
        const page = request.url.searchParams.get('page') || '1';
        response.status = 200;
        response.body = await this.workspaceRepo.getAll(+page);
    }

    public create: RouterMiddleware<string> = async ({ response, request, state }) => {
        const data = await request.body().value;
        const { user } = state;
        const workspace = await this.workspaceRepo.create({...data, user_id: user.id});
        response.status = 200;
        response.body = workspace;
    }

    public get: RouterMiddleware<string> = async ({params, response}) => {
        const { id } = params;
        const workspace = await this.workspaceRepo.get(id);
        if (!workspace) {
            response.status = 404;
            response.body = {
                message: 'Workspace not found',
            };
            return;
        }
        response.status = 200;
        response.body = workspace;
    }

    public update: RouterMiddleware<string> = async ({ params, request, response}) => {
        const { id } = params;
        const data = await request.body().value;
        response.status = 202;
        response.body = await this.workspaceRepo.update(id, data);
    }

    public delete: RouterMiddleware<string> = ({ params, response}) => {
        const { id } = params;
        this.workspaceRepo.delete(id);
        response.status = 204;
    }
}
