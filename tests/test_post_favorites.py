import main
import random
import unittest

class TestFavorites(unittest.TestCase):
    def setUp(self):
        self.app = main.app.test_client()
        self.email = f'test-{random.randint(1000, 9999)}@example.com'
        self.item_id = 123
        main.init_db()

    def test_add_favorite(self):
        data = {
            'email': self.email,
            'item_id': self.item_id
        }
        response = self.app.post('/favorites', json=data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json, {'success': True})

    def test_get_favorites(self):
        response = self.app.get(f'/favorites?email={self.email}')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, [])
        self.app.post('/favorites', json={ 'email': self.email, 'item_id': self.item_id })
        response = self.app.get(f'/favorites?email={self.email}')
        created_at = response.json[0]['created_at']
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, [{'created_at': created_at, 'email': self.email, 'item_id': self.item_id}])

    def test_put_favrites(self):
        self.app.post('/favorites', json={'email': self.email, 'item_id': self.item_id})
        response = self.app.get(f'/favorites?email={self.email}')
        response = self.app.put(f'/favorites?email={self.email}', json={
            'email': self.email,
            'item_id': 456
        })
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, {'success': True})
        response = self.app.get(f'/favorites?email={self.email}')
        print(response.json)
        created_at = response.json['created_at']
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, {created_at: created_at,'email': self.email, 'item_id': 456})
