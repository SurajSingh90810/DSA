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

let value = 20;

if (node.data == value) {
  node = node.next;
} else {
  let current = node;

  while (current.next !== null && current.next.data !== value) {
    current = current.next;
  }

  if (current.next !== null) {
    current.next = current.next.next;
  }
}

let temp = node;

while (temp !== null) {
  console.log(temp.data);
  temp = temp.next;
}
