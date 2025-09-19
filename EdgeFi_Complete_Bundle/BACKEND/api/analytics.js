const { getPool } = require('./utils/db');

export default async function handler(req,res){
  const pool = getPool();
  const conn = await pool.getConnection();
  try{
    const [users] = await conn.query('SELECT COUNT(*) AS total_users FROM users');
    const [payments] = await conn.query('SELECT SUM(amount_cents) AS total_revenue FROM payments WHERE status="completed"');
    res.json({ ok:true, total_users: users[0].total_users, total_revenue: payments[0].total_revenue/100 });
  }catch(err){ console.error(err); res.status(500).json({error:'db error'});}
  finally{ conn.release(); }
}
