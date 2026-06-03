let node = {
  data: 10,
  next: {
    data: 20,
    next: {
      data: 30,
      next: {
        data: 40,
        next: null,
      },                                                                    
    },                                                                    
  },                                                                    
};                                                                    

let newNode = {
  data: 3,
  next: null,
};

let current=node

position=1

for(let i=0; i<position-1;i++){
    current=current.next
}

newNode.next=current.next
current.next=newNode
let temp=node

while (temp !== null) {
  console.log(temp.data);
  temp = temp.next;
}