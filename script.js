const get_promise_burger=new Promise((good,bad)=>{
  const rand_num=Math.ceil(Math.random()*100);
  console.log(rand_num);
  if(rand_num%2===0){good("Even")}
  else{bad("Odd")};
});
get_promise_burger.then((msg)=>{console.log(msg)})
              .catch((err)=>{console.log(err)});
