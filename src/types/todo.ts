export interface ITodoData {
  title: string;
  description: string;
}

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  userId: string;
  created_at: string;
  updated_at: string;
}

export type ITodoWithoutDescription = Omit<ITodo, "description">;