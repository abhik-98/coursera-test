(function () {
  'use strict';
  
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController",ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)
  

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.count = ShoppingListCheckOffService.count;
    toBuy.items =  [
    {
      name : 'cookiee',
      quantity:'20'

    },
    {

      name : 'Cashu',
      quantity:'20'
    },
    {

      name : 'biscuit',
      quantity:'20'
    },
    {

      name : 'orio',
      quantity:'20'
    },
    {
      name : 'svs',
      quantity:'20'

    }

    ];

    ShoppingListCheckOffService.setItem(toBuy.items);

    toBuy.bought = function(index){
        
        toBuy.items = ShoppingListCheckOffService.update(index);
        toBuy.count = ShoppingListCheckOffService.count;
            
      }
     
    };
    



  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){

    var showBought = this;
    showBought.items = ShoppingListCheckOffService.getItem();
  };


  function ShoppingListCheckOffService(){
    var service = this;
    var items = [];
    var items2 = [];

    service.count = 5;

    service.setItem = function(ObjLiteral){
      items = ObjLiteral;
    }

    service.getItem = function(){
      
      return items2;
    }

    

    service.update = function(itemIndex){
      items2.push(items[itemIndex])
      items.splice(itemIndex,1);
      service.count -= 1; 
           
      return items;
    }
  };

})();