const permissions = {
    'super-admin': {
        dashboard: ['view'],
        juvenile_mgmt: ['view', 'create', 'edit', 'delete']
    },
    admin: {
        dashboard: ['view'],
        juvenile_mgmt: ['view', 'create', 'edit']
    }
} as const


export function can(role: string, resource: string, action: string) : boolean {
    const rolePermissions = permissions[role as keyof typeof permissions];

    if(!rolePermissions) return false;

    const resourcePermissions = rolePermissions[resource as keyof typeof rolePermissions];
    if(!resourcePermissions) return false;

    return (resourcePermissions as readonly string[]).includes(action);
}

export function canView(resource: string, role: string){
    return can(role, resource, 'view')
}

export function canEdit(resource: string, role: string){
    return can(role, resource, 'edit')
}

export function canCreate(resource: string, role: string){
    return can(role, resource, 'create')
}

export function canDelete(resource: string, role: string){
    return can(role, resource, 'delete')
}