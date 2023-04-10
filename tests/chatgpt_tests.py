import unittest
import json
import random
import main

class TestFavoritesAPI(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        self.app = app.test_client()
        self.email = f'test-{random.randint(1000,9999)}@example.com'
        self.item_id = '123'

    def test_add_favorite(self):
        response = self.app.post('/favorites', json={
            'email': self.email,
            'item_id': self.item_id
        })
        self.assertEqual(response.status_code, 201)

    def test_get_favorites(self):
        response = self.app.get('/favorites?email=' + self.email)
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['email'], self.email)
        self.assertEqual(data[0]['item_id'], self.item_id)

    def test_get_favorite(self):
        response = self.app.get('/favorites/1')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['email'], self.email)
        self.assertEqual(data['item_id'], self.item_id)

    def test_update_favorite(self):
        response = self.app.put('/favorites/1', json={
            'email': self.email,
            'item_id': '456'
        })
        self.assertEqual(response.status_code, 200)

        response = self.app.get('/favorites/1')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertEqual(data['email'], self.email)
        self.assertEqual(data['item_id'], '456')


if __name__ == '__main__':
    unittest.main()