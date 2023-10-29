const getComputers = (req, res) => {
  res.send("This is the store of our computers.");
};
const getoneComputer = (req,res)=>{
  res.send("we get one computer only")
}

const addComputer = (req,res)=>{
  // res.send(" add one computer only")
  res.json(req.body);
}

const updateComputer = (req,res)=>{
  // res.send("we update one computer only")
  res.json({id:req.params.id});
}

const deleteComputer = (req,res)=>{
  // res.send("we  delete computer ")
  res.json({id:req.params.id});
}


module.exports = { 
  getComputers, 
  getoneComputer,
  addComputer,
  updateComputer,
  deleteComputer
};
