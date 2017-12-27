require('babel-polyfill');
var studentDB=require('./studentDB');
var Student=require('../model/Student');
var Course=require('../model/Course');
var courseDB=require('./courseDB');
var Class=require('../model/Class');
var classDB=require('./classDB');
/*studentDB.findAll().then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})*/
//添加
/*var Student=require('../model/Student');
var student=new Student(null,'李四','男','1995-02-05',null);
studentDB.save(student).then(function(data){
         console.log(data);
 }).catch(function(error){
     console.log("报错"+error);
 });*/
//修改
/*var student = new Student(10,'terry','男','1995-03-08');
studentDB.update(student).then(function(data){
         console.log(data);
    }).catch(function(error){
     console.log("报错"+error);
 });*/
//删除tianjia
/*var ids=[11,12];
studentDB.batchDelete(ids).then(function(data){
         console.log(data);
 }).catch(function(error){
     console.log("报错"+error);
 });*/

 /*studentDB.findById(10).then(function(data){
         console.log(data);
 }).catch(function(error){
     console.log("报错"+error);
 });*/

/*studentDB.query('王').then(function(data){
         ckeconsole.log(data);
 }).catch(function(error){
     console.log("报错"+error);
 });*/

//课程
//查找所有课程
/*courseDB.findAll().then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});*/

//删除
/*var ids=[6,7];
courseDB.batchDelete(ids).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})*/
//添加
/*var course=new Course(null,'单片机','3')
courseDB.save(course).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})*/
//修改
/*var course=new Course(11,'c语言3',5);
courseDB.update(course).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})*/
//通过id查找
/*courseDB.findById(1).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})*/
//通过关键字查找
/*courseDB.query('4').then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})*/

//班级
//查找所有班级
/*classDB.findAll().then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("报错了!"+error);
});*/
//添加班级
/*var clazz=new Class(null,'web1710');
classDB.save(clazz).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("报错了!"+error);
})*/
//修改班级
/*var clazz=new Class(6,'web1707');
classDB.update(clazz).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("报错了!"+error);
})*/
//删除班级
/*var ids=[5,6];
classDB.batchDelete(ids).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("报错了!"+error);
})*/
//通过id查找班级
/*classDB.findById(10).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("报错了!"+error);
});*/
//通过关键字查询班级
classDB.query('web').then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("报错了!"+error);
});