const connection = require('../config/database');

module.exports = {
    getAllBooks: async () => {
        try {
            const [rows] = await connection.query('SELECT * FROM book');
            return rows;
        } catch (error) {
            console.log(error);
        }
    },
    getBookByID: async (book_id) => {
        try {
            const [rows] = await connection.query('SELECT * FROM book WHERE book_id = ?', [book_id]);
            return rows.length ? rows[0] : null;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    createABook: async (title, price, author_id, pu_id) => {
        try {
            const [rows] = await connection.query('INSERT INTO book (title, price, author_id, pu_id) VALUE(?, ?, ?, ?)',
                [title, price, author_id, pu_id]);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    updateABook: async (book_id, title, price, author_id, pu_id) => {
        try {
            const [rows] = await connection.query('UPDATE book SET title = ?, price = ?, author_id = ?, pu_id = ? WHERE book_id = ?', [title, price, author_id, pu_id, book_id]);
            if (rows.affectedRows === 0) {
                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    deleteABook: async (book_id) => {
        try {
            const [rows] = await connection.query('DELETE FROM book WHERE book_id = ?', [book_id]);
            console.log(rows);
            if (rows.affectedRows === 0) {
                return false;
            }
            else {
                return true;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    deleteAllofBooks: async () => {
        try {
            await connection.query('DELETE FROM book');
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}