import { File } from "@models/contentful/Common";

export interface PortfolioItemModel {
  projectName: string;
  description: string;
  logoUrl: string;
  websiteUrl: string;
  logoSrc: File;
}
