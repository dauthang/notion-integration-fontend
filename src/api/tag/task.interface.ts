// Request
export interface TagRequest {
  fromDate: Date;
  toDate: Date;
}

export interface TagReponse {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  color: string;
  deleted_at: any;
}
