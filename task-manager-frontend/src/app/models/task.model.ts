export interface Task {
  id?: number;
  title: string;
  description?: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  userId: number;
  assignedTo: string; 
}