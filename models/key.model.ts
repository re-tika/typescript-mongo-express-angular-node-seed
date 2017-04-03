export interface ResourceKey {
  user: string;
  id: string;
  role: string;
}

export enum Roles {
  ITEM_OWNER
}

export enum Activity {
  READ_ITEM, UPDATE_ITEM
}