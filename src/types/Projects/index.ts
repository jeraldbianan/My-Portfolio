export interface Projects {
  id: number;
  title: string;
  image: string;
  mobileImg: string;
  description: string;
  technologies: Technology[];
  url: string;
}

export interface Technology {
  name: string;
  url: string;
}
