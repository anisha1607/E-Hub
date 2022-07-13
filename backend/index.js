import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

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

const cartSchema = new mongoose.Schema({
    id: String,
    item_id: [String],
    item_quantity: [Number]
})

const orderSchema = new mongoose.Schema({
    id: String,
    item_id: String,
    item_quantity: Number,
    date: {
        type: Date,
        default: new Date()
    }
})

const User = new mongoose.model("User", userSchema)
const Product = new mongoose.model("Product", productSchema)
const Cart = new mongoose.model("Cart", cartSchema)
const Order = new mongoose.model("Order", orderSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(bcrypt.compareSync(password, user.password) ) {
                res.send({message: "Login Successful", user: user})
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
            bcrypt.genSalt(10, (err,salt) =>{
                bcrypt.hash(user.password, salt, (err,hash) =>{
                    if (err) throw err;
                    user.password = hash;
                user.save(). then( user =>{
                    res.send( { message: "Successfully Registered, Please login now." })
                })
            })
        })
        }
    })
}) 



app.post("/useredit", (req, res)=> {
    const { name, email,phone,password} = req.body
    User.findOne({email: email}, (err, user) => {
            if(!err){
                bcrypt.genSalt(10, (err,salt) =>{
                    bcrypt.hash(password, salt, (err,hash) =>{
                        if (err) throw err;
                        user.name=name;
                        user.phone=phone;
                        user.password = hash;
                        user.save(). then( user =>{
                            res.send( { message: "Successfully Updated details!", user: user})
                        })
                    })
                })
            }
            else{
                throw err;
            }
            
        })
    })

    app.post("/cart", (req, res)=> {
        const { id, item_id, item_quantity} = req.body
        const items_id=[];
        items_id.push(item_id);
        const items_quantity=[];
        items_quantity.push(item_quantity);
        Cart.findOne({id: id}, (err, cart) => {
            if(!cart){
                const cart = new Cart({
                   id,
                   items_id,
                   items_quantity
                })
                cart.save(). then( cart =>{
                    res.send( { message: "Successfully added products to cart!"})
                })
            }
            else{
                var i=cart.item_id.indexOf(item_id);
                if(i!=-1){
                    cart.id=id;
                    cart.item_quantity[i]=cart.item_quantity[i]+item_quantity;
                }
                else{
                    cart.id=id;
                    cart.item_id.push(item_id);
                    cart.item_quantity.push(item_quantity);
                }
                cart.save(). then( cart =>{
                    res.send( { message: "Successfully added products to cart!"})
                })
            }
        })
    })

    app.post("/cartdisplay", (req, res)=> {
        const {id} = req.body
        Cart.findOne({id: id}, (err, cart) => {
                res.send( { message:"sent item", cartItems: cart})
        })
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

app.post("/orderhistory", (req, res)=> {
    Order.findAll({id: id},(err,order) =>{
        if(!err){
            res.send(order);
        }
        else{
            console.log("order not found");
        }
    })
})


app.post("/search", (req, res)=> {
    Product.find(req,(err,product) =>{
        if(!err){
            res.send(product);
        }
        else{
            console.log("product not found");
        }
    })
})

// app.post("/search1", (req, res)=> {
//     const name=req.body
//     Product.findOne({name: name}, (err, product) => {
//         if(!err){
//             res.send(product);
//             console.log(product);
//         }
//         else{
//             res.send("Error")
//             console.log(err);
//         }
//     })
// })

app.post("/cartdeleteitem", (req, res)=> {
    const { id, item_id} = req.body
    Cart.findOne({id: id}, (err, cart) => {
        if(cart){
            var i=cart.item_id.indexOf(item_id);
            cart.item_id.splice(i,1);
            cart.item_quantity.splice(i,1);
            cart.save(). then( cart =>{
                res.send( { message: "Successfully added products to cart!"})
            })
        }
    })
})

app.post("/usercartdelete", (req, res)=> {
    const {id} = req.body
    Cart.deleteOne({id: id}, (err, cart) => {
        
    })
})

app.post("/order", (req, res)=> {
    const { id, item_id, item_quantity} = req.body
    const date = new Date();
    const order = new Order({
        id, item_id, item_quantity,date
    })
    order.save(). then( user =>{
        res.send( { message: "Successfully Registered, Please login now." })
    })
})


app.listen(9002,() => {
    console.log("BE started at port 9002")
})