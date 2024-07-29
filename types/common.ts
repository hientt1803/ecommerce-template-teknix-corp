import React from "react";

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface ICart extends IProduct {
  cartQuantity: number;
}

export type LoginResponse = {
  token: string;
  userEmail: string;
  userName: string;
  id: string;
};

export interface IRole {
  id: number | string;
  title: string;
}

export interface IUser {
  email: string;
  fullname?: string;
  address?: string;
  image?: string;
  phone?: number;
  role: IRole[];
}
