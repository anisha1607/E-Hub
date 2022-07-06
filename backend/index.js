import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//C:\Users\SESA673971\AppData\Local\MongoDBCompass


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/demoEhub", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone : String
})

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    brand: String,
    price : String,
    colour: String,
    screenSize: String,
    resolution: String,
    refreshRate : String,
    weight: String,
    image: String
})

const User = new mongoose.model("User", userSchema)
const Product = new mongoose.model("Product", productSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 


app.post("/register", (req, res)=> {
    const { name, email, password,phone} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        } else {
            const user = new User({
                name,
                email,
                password,
                phone
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}) 

app.post("/useredit", (req, res)=> {
    const { name, email,phone,password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(!err){
            user.name=name;
            user.phone=phone;
            user.password=password;
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Updated details!"}, user: user)
                }
            })
        }
        else{
            console.log(" user not found");
        }
    })
    // User.findOneAndRemove({email: email}, (err, user) => {
    //     if(!err){
    //         console.log("record deleted");
    //     }
    // })
})

app.post("/homecarousel", (req, res)=> {
    Product.find(req,(err,product) =>{
        if(!err){
            res.send(product);
            //console.log(product);
        }
        else{
            console.log("product not found");
        }
    })
})




app.listen(9002,() => {
    console.log("BE started at port 9002")
})