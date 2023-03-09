import joi from "npm:joi@^17.8.3";

export const workspaceCreateValidation = joi.object({
    name: joi.string().required().min(3).max(60),
});
