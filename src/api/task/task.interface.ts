// Request
export interface TaskRequest {
  fromDate: Date;
  toDate: Date;
}

export interface TaskReponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
