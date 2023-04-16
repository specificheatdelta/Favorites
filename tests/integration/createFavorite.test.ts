import axios from "axios"

describe('Post Favorite', () => {
    test('should return 201 and create a new favorite', async () => {
        const response = await axios.post('http://localhost:3000/favorites', {
            'profileId': 'a0bvbd99-5f01g-5ja7-cc2d-2da1bd380a11',
            'title': 'Test Favorite',
            'category': ['Workout', 'Meditation'],
            'contentId': 'Alpha Omigron Pi',
        })
        expect(response.status).toBe(201)}
        )
    }
    )