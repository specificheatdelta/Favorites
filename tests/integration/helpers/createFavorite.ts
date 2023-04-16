import {post} from './calls'


export const createFavoritePayload = {
    'id': '235',
    'profileId': 'a0bvbd99-5f01g-5ja7-cc2d-2da1bd380a11',
    'title': 'Test Favorite',
    'category': ['Workout', 'Meditation'],
    'contentId': 'Alpha Omigron Pi',
  }

export const createFavorite = async (payload: any) => {
    return post('/favorites', payload)
}