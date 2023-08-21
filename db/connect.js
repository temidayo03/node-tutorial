const mongoose = require('mongoose')
// mongoose.set('strictQuery',false)
const connectionString = 'mongodb+srv://adesanmitemidayo09:temidayo09@cluster0.pmxgsfc.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

// const connectionString = 'mongodb://127.0.0.1:27017/myapp';


// main().catch((err) => console.log(err));
// async function main() {
//     await mongoose.connect(connectionString,{
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
// }

mongoose
.connect(connectionString)
.then(() => console.log('CONNECTED TO THE DB...'))
.catch((err) => console.log(err));