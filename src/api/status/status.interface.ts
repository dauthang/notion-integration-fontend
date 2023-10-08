// Request
export interface StatusRequest {
  fromDate: Date;
  toDate: Date;
}

export interface StatusReponse {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  color: string;
  deleted_at: any;
}
