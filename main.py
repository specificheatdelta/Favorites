from flask import Flask, request, jsonify
import sqlite3
import os

app = Flask(__name__)

# SQLite database configuration
DATABASE = 'favorites.db'

def get_db():
    db = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
    return db

# API endpoints
@app.route('/favorites', methods=['POST'])
def add_favorite():
    data = request.get_json()
    email = data['email']
    item_id = data['item_id']

    # Save favorite in database
    db = get_db()
    db.execute('INSERT INTO favorites (email, item_id) VALUES (?, ?)', (email, item_id))
    db.commit()
    db.close()

    return jsonify({'success': True}), 201

@app.route('/favorites', methods=['GET'])
def get_favorites():
    email = request.args.get('email')

    # Fetch favorites from database
    db = get_db()
    cursor = db.execute('SELECT email, item_id, created_at FROM favorites WHERE email = ?', (email,))
    favorites = cursor.fetchall()
    db.close()

    return jsonify([dict(favorite) for favorite in favorites]), 200

@app.route('/favorites/<int:id>', methods=['GET'])
def get_favorite(id):
    # Fetch favorite by ID from database
    db = get_db()
    cursor = db.execute('SELECT email, item_id, created_at FROM favorites WHERE id = ?', (id,))
    favorite = cursor.fetchone()
    db.close()

    if favorite:
        return jsonify(dict(favorite)), 200
    else:
        return jsonify({'error': 'Favorite not found'}), 404

@app.route('/favorites/<string:email>', methods=['PUT'])
def update_favorite(email):
    data = request.get_json()
    email = data['email']
    item_id = data['item_id']

    # Update favorite in database
    db = get_db()
    db.execute('UPDATE favorites SET email = ?, item_id = ? WHERE id = ?', (email, item_id, id))
    db.commit()
    db.close()

    return jsonify({'success': True}), 200

# Initialize database
def init_db():
    if not os.path.isfile(DATABASE):
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()
        db.close()

if __name__ == '__main__':
    init_db()
    app.run()
