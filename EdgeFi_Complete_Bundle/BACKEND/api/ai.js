export default async function handler(req,res){
  // Example AI insight
  res.json({
    ok:true,
    insights:[
      { title:'Most active users', value: 12 },
      { title:'Top selling package', value:'Monthly 30 Days 1 user' }
    ]
  });
}
