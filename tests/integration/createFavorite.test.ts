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
    test('should return 400 and not create a new favorite', async () => {  
        const response = await axios.post('http://localhost:3000/favorites', { 
            'profileId': 'a0bvbd99-5f01g-5ja7-cc2d-2da1bd380a11',   
            'title': 'Test Favorite',
            'category': ['Workout', 'Meditation'],
            'contentId': 'Alpha Omigron Pi',
        })
        expect(response.status).toBe(400)}
        )
    // test Deleting a Favorite
        test('should return 204 and delete a favorite', async () => {
            const response = await axios.delete('http://localhost:3000/favorites/235')
            expect(response.status).toBe(204)}
            )
    //test updating a favorite
        test('should return 200 and update a favorite', async () => {
            


        }
    )