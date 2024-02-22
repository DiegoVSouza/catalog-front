export interface ProjectAPIEntity {
  id: string;
  title: string;
  link: string;
  is_completed: boolean;
  description: string;
  stacks: string[];
  image: string;
  deploy_link: string;
}
