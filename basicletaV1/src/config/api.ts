import { environment } from "src/environments/environment";


export const baseUrl = environment.production ? 'https://api.basicleta.com': 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
export const wishListUrl = baseUrl + '/wishlist'