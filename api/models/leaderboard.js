const db = require ('../dbConfig')

class Leaderboard {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.score = data.score
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const leaderboardData = await db.query(`SELECT * FROM leaderboard;`)
                const leaderboard = leaderboardData.rows.map(d => new Leaderboard(d))
                resolve(leaderboard);
            } catch (err) {
                reject("Error retrieving leaderboard")
            }
        })
    }

    static create(name, score){
        return new Promise (async (resolve, reject) => {
            try {
                let leaderboardData = await db.query(`INSERT INTO leaderboard (name, score) VALUES ($1, $2) RETURNING *;`, [ name, score ]);
                let newLeaderboard = new Leaderboard(leaderboardData.rows[0]);
                resolve (newLeaderboard);
            } catch (err) {
                reject('Error creating Leaderboard Entry');
            }
        });
    }



}

module.exports = Leaderboard;