let express=require('express');
let route=express.Router();
let Course=require('../model/Course');
let courseDB=require('../db/courseDB');
route.get('/findAll',(req,resp)=>{
    courseDB.findAll().then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    })
})
route.get('/findById',(req,resp)=>{
    courseDB.findById(req.query.id).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});

route.get('/query/:keys',(req,resp)=>{
    courseDB.query(req.params.keys).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
//录入
route.post('/save',(req,resp)=>{
    var course=new Course(); 
    Object.assign(course,req.body); 
    console.log(req.body);
    courseDB.save(course).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
//修改
route.post('/update',(req,resp)=>{
    let course=new Course();
    Object.assign(course,req.body);
    courseDB.update(course).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
//批量删除
route.post('/batchDelete',(req,resp)=>{
    courseDB.batchDelete(req.body).then((data)=>{
        resp.send(data);
    }).catch((error)=>{
        resp.send(error);
    });
});
module.exports=route;