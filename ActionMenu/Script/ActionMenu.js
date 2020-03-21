"use strict"

function initializeControlAddIn(id) {
  var controlAddIn = document.getElementById(id);


  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnAddInReady', null);
}


function CreateButtons(caller)
{
  var controlAddIn = document.getElementById('controlAddIn');
  var hamburgerMenu =   '<div id="actionbuttons">'+
  '<a class="dropdown-trigger btn" href="#" data-target="dropdown1">Actions</a>' +
  '<ul id="dropdown1" class="dropdown-content">';
  if (caller == 'setup'){
    hamburgerMenu += '<li><a><div onclick="linkSetup()"><i class="small material-icons">settings</i>Setup</div></a></li>' +
    '<li class="divider" tabindex="-1">Refersh Data</li>' +
    '<li><a><div onclick="linkRefresh()"><i class="small material-icons">cloud_download</i>Refresh</div></a></li>' +
    '<li><a><div onclick="linkDateFilter()"><i class="small material-icons">date_range</i>Dates</div></a></li>';
  }else{
      hamburgerMenu +='<li><a><div onclick="linkRefresh()"><i class="small material-icons">cloud_download</i>Refresh</div></a></li>' +
      '<li><a><div onclick="linkDateFilter()"><i class="small material-icons">date_range</i>Dates</div></a></li>';
  }
  hamburgerMenu += '</ul></div>';


  $(controlAddIn).append(hamburgerMenu);
  $('.dropdown-trigger').dropdown();
}

function sendToNav(funct, paras) {
  Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(funct, [paras]);
 }

 function linkSetup(){
  sendToNav('OnItemClicked','setup');
 }

 function linkRefresh(){
  sendToNav('OnItemClicked','refresh');
 }

 function linkDateFilter(){
  sendToNav('OnItemClicked','filter');
 }

 function RemoveSetupBtn(){
  document.getElementById('setup').remove();

 }

 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});


