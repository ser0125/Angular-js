(function(){
/*
var app = angular.module("Myfirstapp",[]);
  app.controller("Firstcontroller",function($scope){
*/
  //Para minificar los archivos de javascript se usan
  //otras variables
  //http se usa para get, post,delete, update
 angular.module("Myfirstapp",[])
.controller("Firstcontroller",["$scope","$http",function(m,h){
m.nombre="sergio";
m.numLimit = 3;

    m.nuevoComentario={};
     m.comentarios=[
      {
      comentario:"buen comentario",
      username:"sergii"
    },
  {
    comentario:"ñññ comentario",
    username:"josselyn"
  }
];
m.agregarComentario=function(){
m.comentarios.push( m.nuevoComentario);

 m.nuevoComentario={};
}

h({
method:'GET',
url:'https://jsonplaceholder.typicode.com/posts'
}).then(function successCallback(data){

  m.posts=data;
  console.log( m.posts);
},function errorCallback(error){

});





}]);
})();
