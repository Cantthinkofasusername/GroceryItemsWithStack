function groceryStacks(){
    let groceryList = [];

    groceryItem1 = prompt("Enter the first grocery item");
    pushItems(groceryItem1);
    alert(groceryList);
    groceryItem2 = prompt("Enter the second grocery item");
    pushItems(groceryItem2);
    alert(groceryList);
    groceryItem3 = prompt("Enter the third grocery item");
    pushItems(groceryItem3);
    alert(groceryList);
    groceryItem4 = prompt("Enter the fourth grocery item");
    pushItems(groceryItem4);
    alert(groceryList);
    groceryItem5 = prompt("Enter the fifth grocery item");
    pushItems(groceryItem5);
    alert(groceryList);

    function pushItems(item){
        if (item != ""){
            groceryList.push(item);
        }
    }

    function popItems(){
        if(isEmpty()){
            return "Grocery is empty";
        }
        groceryList.pop();
    }

    function peekItems(){
        if(isEmpty()){
            return "Grocery is empty.";
        } else if(isFull()) {
            return "Grocery is full";
        }
        return groceryList(statusbar.length -1)
    }

    function isEmpty(){
        return groceryList.length === 0;
    }

    function isFull(){
        return groceryList.length === 5;
    }
}