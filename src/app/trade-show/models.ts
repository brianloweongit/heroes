export interface IBudget {
  Allocated: number;
  Spent: number;
}

export class Budget implements IBudget {
  Allocated: number;
  Spent: number;
}

export interface IShow {
  Budget: IBudget;
  Categories: ShowCategory[];
  EndDate: Date;
  Exhibitors: IExhibitor[];
  ProjectFile: string;
  Promotions: IPromotion[];
  Reviews: IReview[]
  StartDate: Date;
  Suppliers: ISupplier[];
  Title: string;
  Venue: IVenue;
  Visitors: IVisitor[];
}

export class Show implements IShow {
  Budget: IBudget;
  Categories: ShowCategory[];
  EndDate: Date;
  Exhibitors: IExhibitor[];
  ProjectFile: string;
  Promotions: IPromotion[];
  Reviews: IReview[]
  StartDate: Date;
  Suppliers: ISupplier[];
  Title: string;
  Venue: IVenue;
  Visitors: IVisitor[];
}

export enum ShowCategory {
  Wedding, Motor
}

export interface ILatLong {
  Lat: number;
  Lon: number;
}

export interface ILocation {
  Address: string;
  W3W: string;
  LatLong: ILatLong;
}

export interface IContact {
  Address: string;
  Email: string;
  Name: string;
  Phone: string;
}

export enum Grade { Budget, Medium, Premium, Gold }

export interface IVenue extends IBusiness {
  Grade: Grade;
  GuideExhibitorCount: number;
  GuideSpace: number;
  GuideVisitorCount: number;
}

export interface IBusiness {
  Contact: IContact;
  Links: string[];
  Location: ILocation;
  Title: string;
}

export class Business implements IBusiness {
  Contact: IContact;
  Links: string[];
  Location: ILocation;
  Title: string;
}

export class Venue extends Business implements IBusiness, IVenue {
  Grade: Grade;
  GuideExhibitorCount: number;
  GuideSpace: number;
  GuideVisitorCount: number;
}

export enum BusinessCategory {
  Accommodation,
  Catering,
  Couture,
  HairAndMakeUp,
  Insurance
  Jewellery,
  Photography,
  Stationery,
  Transport,
  Travel,
  Venue,
}

export interface IExhibitor extends IBusiness {
  Category: BusinessCategory;
  Grade: Grade;
}

export class Exhibitor extends Business implements IExhibitor, IBusiness {
  Category: BusinessCategory;
  Grade: Grade;
}

export interface IVisitor {
  Person: IContact;
  Grade: Grade;
}
export class Visitor implements IVisitor {
  Person: IContact;
  Grade: Grade;
}

export interface ISupplier extends IBusiness {
  Category: BusinessCategory;
  Grade: Grade;
}

export class Supplier extends Business implements ISupplier {
  Category: BusinessCategory;
  Grade: Grade;
}
export enum ProjectStatus {
  Archived,
  Complete,
  InProgress,
  New,
  Shelved
}
export class Project {
  Manager: IContact;
  MasterFile: string;
  Status: ProjectStatus;
  Title: string;
}


export interface IPromotion {
  Channel: string;
  Cost: number;
  Creator: IContact;
  Evaluation: string;
  Example: string;
  PublishedDate: Date;
  PurchaseDate: Date;
  Reach: number;
  Resource: string;
  Type: string;
}

export class Promotion implements IPromotion {
  Channel: string;
  Cost: number;
  Creator: IContact;
  Evaluation: string;
  Example: string;
  PublishedDate: Date;
  PurchaseDate: Date;
  Reach: number;
  Resource: string;
  Type: string;
}

export class IReview {
  Channel: string;
  Creator: IContact;
  Date: Date;
  Evaluation: string;
  Reach: number;
  ReUseAgreed: boolean;
  Type: string;
}

export class Review implements IReview {
  Channel: string;
  Creator: IContact;
  Date: Date;
  Evaluation: string;
  Reach: number;
  ReUseAgreed: boolean;
  Type: string;
}
