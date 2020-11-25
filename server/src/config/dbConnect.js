require('dotenv').config();
const mongoose = require('mongoose');

const { dbPATH, dbNAME, dbPASSWORD} = process.env;
const regex = /(<\w*>)(.*)(<\w*>)/gmi;
const PATH = dbPATH.replace(regex,(m,p1,p2,p3)=>{
    return [dbPASSWORD,p2,dbNAME].join('');
});

module.exports = mongoose.connect(PATH, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('mongoDB is connected to ', PATH))
    .catch((err) => console.log('Error: ', err));