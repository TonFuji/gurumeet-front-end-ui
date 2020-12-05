import $ from 'jquery';

function mainMember() {
  (function () {
   'use strict';

  //member sidebar
  /*
  $("#sidebar").click(function (event) {
    alert("Hello! I am an alert box!!");
    var toggle = $("#sidebar").is(":visible");
    if (toggle) {
      $("#siderbar").addClass("collapse");
    }
  });
  */

  /*
  document.getElementById("btnSidebar").onclick = function(){
      var parent = document.getElementById("sidebar");
      parent.classList.toggle("collapsed");
      parent.getElementsByClassName("sidebar-wrapper")[0].classList.toggle("collapsed");

      document.body.classList.toggle("collapsed");
  */

  window.onload = function() {

    //member sidebar in small screen
    $("#btnSidebar").click(function(){
      //alert("yes is here");
      //var toggle = $("#sidebar").is(":visible");
     // if (toggle) {
       // $("#siderbar").toggleClass("collapsed"); //not working
       // }
      var parent = document.getElementById("sidebar");
      parent.classList.toggle("collapsed");
      parent.getElementsByClassName("sidebar-wrapper")[0].classList.toggle("collapsed");

      document.body.classList.toggle("collapsed");
    });	

    /*z
    //backup sidebar function for dynamic route design
    $("#sidebar .nav-title").click(function(e){
      if(this.className.includes("collapse")){
        var parent = document.getElementById("sidebar");
        var mainSidebar = parent.getElementsByClassName("mainSideBar");
        
        for (let i = 0, len = mainSidebar.length; i < len; i++)
        {
            mainSidebar[i].onclick = function(){
              parent.getElementsByClassName("nav-title")[i].classList.toggle("collapse");
              parent.getElementsByClassName("nav-title-sub-1")[i].classList.toggle("collapse");  
              
              parent.getElementsByClassName("nav-title-sub-1")[i].onclick = function(){
                parent.getElementsByClassName("nav-title")[0].classList.toggle("active");  
              }
            }
        }

        }
    });
    */
   
  $("#sidebar .nav-title").click(function(e, idx){
    var targetClsList = this.className;
    var clsArray = targetClsList.split(' ');
    var targetCls = clsArray.filter(x=>{
      return x.includes('sb');
    });

    if(targetClsList.includes("sb")){
      var parent = document.getElementById("sidebar");
      var mainSidebar = parent.getElementsByClassName("mainSideBar");
      
      //document.getElementsByClassName(targetCls[0])[0].classList.toggle("collapse");
      //document.getElementsByClassName(targetCls[0])[1].classList.toggle("collapse");

      //e.preventDefault();
     // target.classList.toggle("collapsed");
      //e.target.id
      /*
      for (let i = 0, len = mainSidebar.length; i < len; i++)
      {
          mainSidebar[i].onclick = function(){
            parent.getElementsByClassName("nav-title")[i].classList.toggle("collapse");
            parent.getElementsByClassName("nav-title-sub-1")[i].classList.toggle("collapse");  
            
          }
      }
      */
    }
  });
    
    


  };
}());


}
mainMember();