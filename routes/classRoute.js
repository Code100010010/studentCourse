let express=require('express');
let route=express.Router();
let Class=require('../model/Class');
let classDB=require('../db/classDB');
route.get('/findAll',(req,resp)=>{
    classDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.get('/findById',(req,resp)=>{
    classDB.findById(req.query.id).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.get('query/:keys',(req,resp)=>{
    classDB.query(req.params.keys).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.post('/save',(req,resp)=>{
    var clazz=new Class(); 
    Object.assign(clazz,req.body); 
    classDB.save(clazz).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
route.post('/update',(req,resp)=>{
    var clazz=new Class();
    Object.assign(clazz,req.body);
    classDB.update(clazz).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.post('/batchDelete',(req,resp)=>{
    classDB.batchDelete(req.body).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
module.exports=route;