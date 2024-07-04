export interface Posts {
  id: number;
  title: string;
  description: string;
  timestamp?: number;
  author?: string;
  likes: string[];
  isRead: string;
}
