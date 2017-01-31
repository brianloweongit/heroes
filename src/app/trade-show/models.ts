export interface IShow {
  Title: string;
  StartDate: Date;
  EndDate: Date;
  Categories: ShowCategory[];
  Venue: IVenue;
  Exhibitors: IExhibitor[];
  Visitors: IVisitor[];
  Suppliers: ISupplier[];
  ProjectFile: string;
  Budget: IBudget;
  Promotions: IPromotion[];
  Reviews: IReview[]
}

export class Show implements IShow {
  Title: string;
  StartDate: Date;
  EndDate: Date;
  Categories: ShowCategory[];
  Venue: IVenue;
  Exhibitors: IExhibitor[];
  Visitors: IVisitor[];
  Suppliers: ISupplier[];
  ProjectFile: string;
  Budget: IBudget;
  Promotions: IPromotion[];
  Reviews: IReview[]
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
  Name: string;
  Phone: string;
  Email: string;
  Address: string;
}

export enum Grade { Budget, Medium, Premium, Gold }

export interface IVenue extends IBusiness {
  GuideSpace: number;
  GuideExhibitorCount: number;
  GuideVisitorCount: number;
  Grade: Grade
}

export interface IBusiness {
  Title: string;
  Location: ILocation;
  Contact: IContact;
  Links: string[];
}

export class Business implements IBusiness {
  Title: string;
  Location: ILocation;
  Contact: IContact;
  Links: string[];
}

export class Venue extends Business implements IBusiness, IVenue {
  GuideExhibitorCount: number;
  GuideSpace: number;
  GuideVisitorCount: number;
  Grade: Grade
}

export enum BusinessCategory {
  Venue, Catering, Photography, Couture, Stationery,
  HairAndMakeUp, Jewellery, Transport, Accommodation, Travel, Insurance
}

export interface IExhibitor extends IBusiness {
  Category: BusinessCategory;
  Grade: Grade
}

export class Exhibitor extends Business implements IExhibitor, IBusiness {
  Category: BusinessCategory;
  Grade: Grade
}

export interface IVisitor {
  Person: IContact;
  Grade: Grade;
}
export class Visitor implements IVisitor {
  Person: IContact;
  Grade: Grade
}

export interface ISupplier extends IBusiness {
  Category: BusinessCategory;
  Grade: Grade
}

export class Supplier extends Business implements ISupplier {
  Category: BusinessCategory;
  Grade: Grade
}
export enum ProjectStatus {
  New, InProgress, Complete, Archived, Shelved
}
export class Project {
  Title: string;
  MasterFile: string;
  Manager: IContact;
  Status: ProjectStatus
}

export interface IBudget {
  Allocated: number;
  Spent: number;
}

export class Budget implements IBudget {
  Allocated: number;
  Spent: number;
}

export interface IPromotion {
  Type: string;
  PurchaseDate: Date;
  Cost: number;
  Creator: IContact;
  Channel: string;
  Example: string;
  PublishedDate: Date;
  Reach: number;
  Evaluation: any;
  Resource: any;
}

export class Promotion implements IPromotion {
  Type: string;
  PurchaseDate: Date;
  Cost: number;
  Creator: IContact;
  Channel: string;
  Example: string;
  PublishedDate: Date;
  Reach: number;
  Evaluation: any;
  Resource: any;
}

export class IReview {
  Type: string;
  Date: Date;
  Channel: string;
  Creator: IContact;
  Reach: number;
  Evaluation: any;
  ReUseAgreed: boolean;
}

export class Review implements IReview {
  Type: string;
  Date: Date;
  Channel: string;
  Creator: IContact;
  Reach: number;
  Evaluation: any;
  ReUseAgreed: boolean;
}
