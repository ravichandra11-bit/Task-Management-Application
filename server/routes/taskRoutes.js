const router=require('express').Router();

let tasks=[];

router.get('/',(req,res)=>{
 res.json(tasks);
});

router.post('/',(req,res)=>{
 tasks.push(req.body);
 res.json(req.body);
});

router.put('/:id',(req,res)=>{
 res.json({message:'Task Updated'});
});

router.delete('/:id',(req,res)=>{
 res.json({message:'Task Deleted'});
});

module.exports=router;
