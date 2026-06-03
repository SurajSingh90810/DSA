let node = {
  data: 10,
  next: {
    data: 20,
    next: {
      data: 30,
      next: null,
    },
  },
};

let newNode = {
  data: 1,
  next: null,
};

newNode.next = node;
node = newNode;

let temp = node;

while (temp !== null) {
  console.log(temp.data);
  temp = temp.next;
}
