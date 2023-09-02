export interface UserRes {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}
