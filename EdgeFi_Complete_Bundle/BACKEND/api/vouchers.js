const { getPool } = require('./utils/db');

export default async function handler(req,res){
  const pool = getPool();
  if(req.method==='POST'){
    const { code, userId } = req.body || {};
    if(!code || !userId) return res.status(400).json({error:'code and userId required'});

    const conn = await pool.getConnection();
    try {
      const [rows] = await conn.query('SELECT * FROM vouchers WHERE code=? AND user_id=? LIMIT 1', [code, userId]);
      if(!rows.length) return res.status(404).json({ error:'voucher not found' });
      if(rows[0].redeemed) return res.status(400).json({ error:'voucher already redeemed' });

      await conn.query('UPDATE vouchers SET redeemed=1 WHERE id=?', [rows[0].id]);
      res.json({ ok:true, message:'voucher redeemed' });
    } catch(err){ console.error(err); res.status(500).json({ error:'db error'});}
    finally { conn.release(); }
  } else { res.status(405).json({ error:'method not allowed'});}
}
