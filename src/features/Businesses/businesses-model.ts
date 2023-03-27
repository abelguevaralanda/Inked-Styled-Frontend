type Business = {
  _id: string;
  categories: string;
  nameBusiness: string;
  address: string;
  phone: string;
  profileUrl: string;
  description: string;
  reviews: string[];
  score: number[];
  creator: string;
};

export interface Businesses {
  businesses: Business[];
}

export type BusinessInfo = Omit<
  Business,
  '_id' | 'creator' | 'reviews' | 'score'
>;

export type BusinessId = Pick<Business, '_id'>;

export type ApiError = {
  msg: string;
};

export type ApiResponse<T> = ApiError | T;

export default Business;
