// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function G(noofvertices) {
  this.noofvertices = noofvertices;
  this.AdjList = new Map();
  this.arr = [];
  
  
  for (let i = 0; i < noofvertices; i++) {
    this.arr.push([]);
    for (let j = 0; j < noofvertices; j++) {
      this.arr[i][j] = 0;
    }
  }
  
  this.AddVertex = (u) => {
    this.AdjList.set(u.symbol, []);
  };
  
  this.AddEdge = (u, v) => {
    this.AdjList.get(u.symbol).push(v.symbol);
  };
  
  this.serWeight = (u, v,k) => {
      if (!this.arr[u.symbol]) {
        this.arr[u.symbol] = [];
    }
    this.arr[u.symbol][v.symbol] = k;
  };
  
  this.getWeight = (u, v) => {
    return this.arr[u.symbol][v.symbol];
  };
  
  this.PrintGraph = () => {
    var get_keys = this.AdjList.keys();
    for (var i of get_keys) {
      var get_values = this.AdjList.get(i);
      var conc = "";
      for (var j of get_values) {
        conc += j + " ";
      }
      console.log(i + " -> " + conc);
    }
  };
this.getPath = (u, v) => {
  this.pathArr = [];
  var val = v;
  while (val != null && val.symbol != u.symbol) {
    this.pathArr.push(val);
    val = vertices.find(vertex => vertex.symbol === val.pi);
  }

  this.pathArr.push(u);
  console.log(this.pathArr.reverse().map(vertex => vertex.symbol));
};
}

function Box(symbol, d,pi) {
  this.d = d;
  this.symbol = symbol;
  this.pi = pi
  
  
}

const g = new G(6);

var vertices = [
  new Box("s", 0,null),
  new Box("t", 999999,null),
  new Box("y", 999999,null),
  new Box("x", 999999,null),
  new Box("z", 999999,null),
 
];

for (var i = 0; i < vertices.length; i++) {
  g.AddVertex(vertices[i]);
}

g.AddEdge(vertices[0], vertices[1]);
g.serWeight(vertices[0], vertices[1],10);

g.AddEdge(vertices[0], vertices[2]);
g.serWeight(vertices[0], vertices[2],5);

g.AddEdge(vertices[2], vertices[1]);
g.serWeight(vertices[2], vertices[1],3);

g.AddEdge(vertices[1], vertices[3]);
g.serWeight(vertices[1], vertices[3],1);

g.AddEdge(vertices[1], vertices[2]);
g.serWeight(vertices[1], vertices[2],2);

g.AddEdge(vertices[2], vertices[3]);
g.serWeight(vertices[2], vertices[3],9);

g.AddEdge(vertices[3], vertices[4]);
g.serWeight(vertices[3], vertices[4],4);

g.AddEdge(vertices[4], vertices[3]);
g.serWeight(vertices[4], vertices[3],6);

g.AddEdge(vertices[2], vertices[4]);
g.serWeight(vertices[2], vertices[4],2);

g.AddEdge(vertices[4], vertices[0]);
g.serWeight(vertices[4], vertices[0],7)


g.PrintGraph();
let Q = []
for(var node in vertices){
    Q.push(vertices[node])
    
}


console.log(Q)



while(Q.length !== 0){
    
Q.sort(function(a,b)
{
    return  b.d-a.d
})

    var u = Q.pop()
  console.log(u)
   
    
   
    g.AdjList.get(u.symbol).forEach((vSymbol)=>{
     let v = vertices.find(vertex => vertex.symbol === vSymbol);
  if(v.d > u.d + g.getWeight(u, v)){
    v.d = u.d + g.getWeight(u, v);
    v.pi = u.symbol;
    
         
        
         
     
     }
    
       
    })  
    
    
}
g.getPath(vertices[0],vertices[3]) 

