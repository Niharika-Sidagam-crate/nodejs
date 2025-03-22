

const express = require("express");
const app = express();
var cors = require('cors');
var mysql = require('mysql');

const multer = require('multer');
const path = require('path');
const port = 5000;

app.use(cors());
app.use(express.json());


const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: "app.log"})
    ]
});

const fileStorageEngine = multer.memoryStorage();
const upload = multer({ storage: fileStorageEngine });


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jiomartapplication"
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

app.get('/', (req, res) => {
    res.send("JIOMART");
});

app.get('/home', (req, res) => {
    res.send("Hello");
});

// Get all products
app.get("/product", (req, res) => {
    const sql = "SELECT * FROM products";
    con.query(sql, (err, data) => {
        if (err) {
            logger.error("error:", err);
            return res.status(500).json({ error: "Error" });
        }
        logger.info("get the products data");
        return res.json(data);
    });
});

// Get product by ID
app.get("/product/:product_id", (req, res) => {
    const product_id = req.params.product_id;
    const sql = "SELECT * FROM products WHERE product_id = ?";
    
    con.query(sql, [product_id], (err, data) => {
        if (err) {
            logger.error("error:", err);
            return res.status(500).json({ error: "Failed to fetch product" });
        }
        
        if (data.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        logger.info("get the product by id");
        return res.json(data[0]);
    });
});


// Add product route
app.post('/product', upload.single('product_image'), (req, res) => { 
    const { product_name, description, price, original_price, stock_quantity, star, SubCategories_id } = req.body;
    if (!product_name || !description || !price || !original_price || !stock_quantity || !star || !SubCategories_id) {
        logger.error('Missing required fields')
        return res.status(400).json({ error: "All fields (product_name, description, price, original_price, stock_quantity, star, SubCategories_id) are required" });
    }
    if (!req.file) {
        logger.error('No file uploaded')
        return res.status(400).json({ error: "Product image is required" });
    }
    const product_image = req.file.buffer; 
    const sql = `
        INSERT INTO products 
        (product_name, product_image, description, price, original_price, stock_quantity, star, SubCategories_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    con.query(sql, [product_name, product_image, description, price, original_price, stock_quantity, star, SubCategories_id], (err, data) => {
        if (err) {
            logger.error("Error inserting product:", err);
            return res.status(500).json({ error: "Failed to insert product" });
        }
        logger.info("Product inserted successfully");
        res.json({ message: 'Product inserted successfully' });
    });
});


// Update product 
app.put('/product/:product_id', upload.single('product_image'), (req, res) => {
    const product_id = req.params.product_id;
    const { product_name, description, price, original_price, stock_quantity, star, SubCategories_id } = req.body;

    let product_image = req.file ? req.file.path : null;

    const sql = `UPDATE products SET product_name = ?,product_image = ?,description = ?,price = ?,original_price = ?,stock_quantity = ?,star = ?,SubCategories_id = ? WHERE product_id = ?`;

    con.query(sql, [product_name, product_image, description, price, original_price, stock_quantity, star, SubCategories_id, product_id], function (err, data) {
   if (err) {
            logger.error("Error updating product:", err);
            return res.status(500).json({ error: "Error updating product" });
        }
        logger.info("Product updated successfully");
        return res.json({
            message: "Product updated successfully",
        });
    });
});
// Delete a product
app.delete('/product/:product_id', function (req, res) {
    const product_id = req.params.product_id;
    const sql = "DELETE FROM products WHERE product_id = ?";
    con.query(sql, [product_id], function (err, data) {
        if (err) {
            logger.error("Error deleting product:", err);
            return res.status(500).json({ error: "Failed to delete product" });
        }
        logger.info("Product deleted successfully");
        return res.json("Product deleted successfully");
    });
});


// GET products by category
// app.get("/product/category/:category_name", (req, res) => {
//     const category_name = req.params.category_name;

//     const sql = `
//         SELECT p.product_id, 
//                p.product_name, 
//                p.product_image, 
//                p.description, 
//                p.price, 
//                p.original_price, 
//                p.stock_quantity,
//                c.category_name, 
//                sc.subcategory_name
//         FROM products p
//         JOIN SubCategories sc ON p.SubCategories_id = sc.SubCategories_id
//         JOIN categories c ON sc.category_id = c.category_id
//         WHERE c.category_name = ?;
//     `;

//     con.query(sql, [category_name], (err, data) => {
//         if (err) {
//             logger.error(err);
//             return res.status(500).send("Server Error");
//         }
//         if (data.length === 0) {
//             return res.status(404).send("No products found for this category");
//         }
//         return res.json(data);
//     });
// });


//get image of products
app.get('/image/:image_id', (req, res) => {
    const {image_id} = req.params;
    const sql ='SELECT image_data, image_name FROM productimages WHERE image_id =?';
    con.query(sql, [image_id], (err, data) => {
        if(err){
            console.log(err)
            return res.status(500).send('Error'); 
        } 
        if(data.length ===0){
            return res.status(404).send('image not found');
        }
        const image= data[0];
        const imagetype=image.image_name.split('.').pop().toLowerCase(); 
        let contentType='application/octet-stream';
        if (imagetype === 'jpg' || imagetype === 'jpeg') {
            contentType = 'image/jpeg';
        }else if (imagetype=== 'webp'){
             contentType = 'image/webp';
        } else{
            res.send('unsupported file')
        }
        res.contentType(contentType);       
        res.send(image.image_data);
    })
})


//get image by product id
app.get('/image/product/:product_id', (req, res) => {
    const { product_id } = req.params;

    const sql = 'SELECT image_data, image_name FROM productimages WHERE product_id = ?';

    con.query(sql, [product_id], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error fetching image'); 
        }

        if (data.length === 0) {
            return res.status(404).send('No image found for the given product_id');
        }

        const image = data[0];
        const imagetype = image.image_name.split('.').pop().toLowerCase();

        let contentType = 'application/octet-stream'; 

        if (imagetype === 'jpg' || imagetype === 'jpeg') {
            contentType = 'image/jpeg';
        } else if (imagetype === 'webp') {
            contentType = 'image/webp';
        } else if (imagetype === 'png') {
            contentType = 'image/png';
        } else if (imagetype === 'gif') {
            contentType = 'image/gif';
        } else {
            return res.status(415).send('Unsupported image format');
        }


        res.contentType(contentType);
        res.send(image.image_data);
    });
});


//post the image
app.post('/save-image', upload.single('file'), (req, res) => {
    
    if (req.file) {
        const { originalname, buffer } = req.file;
        const { product_id } = req.headers; 
        const query = "INSERT INTO productimages (image_name, image_data, product_id) VALUES (?, ?, ?)";

        con.query(query, [ originalname, buffer, product_id], (err, result) => {
            if (err) {
                logger.error("Error saving file data to MySQL:", err);
                return res.status(500).send("Error saving file data to database");
            }
            res.send("File saved to database successfully");
        });
    } else {
        res.status(400).send("No file uploaded");
    }
});


app.get("/product/category/:category_name", (req, res) => {
    const category_name = req.params.category_name;

    // First get all products in the category
    const productSql = `
        SELECT p.product_id, 
               p.product_name, 
               p.description, 
               p.price, 
               p.original_price, 
               p.stock_quantity,
               c.category_name, 
               sc.subcategory_name,
               pi.image_name,
               pi.image_data
        FROM products p
        JOIN SubCategories sc ON p.SubCategories_id = sc.SubCategories_id
        JOIN categories c ON sc.category_id = c.category_id
        LEFT JOIN 
            productimages pi ON p.product_id = pi.product_id
        WHERE c.category_name = ?;
    `;

    con.query(productSql, [category_name], (err, products) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Server Error");
        }
        
        if (products.length === 0) {
            return res.status(404).send("No products found for this category");
        }

        // // Get all product IDs from the results
        // const productIds = products.map(product => product.product_id);
        
        // // Now fetch all images for these products in a single query
        // const imageSql = 'SELECT product_id, image_data, image_name FROM productimages WHERE product_id IN (?)';
        
        // con.query(imageSql, [productIds], (imageErr, images) => {
        //     if (imageErr) {
        //         console.error(imageErr);
        //         return res.status(500).send("Error fetching product images");
        //     }
            
            // Create a map of product_id to image data
            const imageMap = {};
            products.forEach(image => {
                const imagetype = image.image_name.split('.').pop().toLowerCase();
                let contentType = 'application/octet-stream';
                
                if (imagetype === 'jpg' || imagetype === 'jpeg') {
                    contentType = 'image/jpeg';
                } else if (imagetype === 'webp') {
                    contentType = 'image/webp';
                } else if (imagetype === 'png') {
                    contentType = 'image/png';
                } else if (imagetype === 'gif') {
                    contentType = 'image/gif';
                }
                
                // Store image data with content type
                imageMap[image.product_id] = {
                    contentType: contentType,
                    data: image.image_data
                };
            });
            
            // Create response object with both product data and image data
            const response = {
                products: products,
                
            };
            
            return res.json(response);
        });
    });





app.get("/product/category/:category_name/:product_id", (req, res) => {
    const category_name = req.params.category_name;
    const product_id = req.params.product_id;
    const sql = `
        SELECT p.product_id, 
               p.product_name, 
               p.product_image, 
               p.description, 
               p.price, 
               p.original_price, 
               p.stock_quantity,
               c.category_name, 
               sc.subcategory_name
        FROM products p
        JOIN SubCategories sc ON p.SubCategories_id = sc.SubCategories_id
        JOIN categories c ON sc.category_id = c.category_id
        WHERE c.category_name = ? AND p.product_id = ?;
    `;

    con.query(sql, [category_name, product_id], (err, data) => {
        if (err) {
            logger.error("Error:", err);
            return res.status(500).send("Server Error");
        }
        if (data.length === 0) {
           logger.warn("No product found for the given category and product ID");
            return res.status(404).send("Product not found for this category");
        }

        return res.json(data);
    });
});


//get categories
app.get("/category", (req, res) => {
    const sql = "SELECT * FROM categories";
    con.query(sql, (err, data) => {
        if (err) {
            logger.error("error:", err);
            return res.status(500).json({ error: "Error" });
        }
        logger.info("get the categories data");
        return res.json(data);
    });
});


//getsub Categories
app.get("/Subcategory", (req, res) => {
    const sql = "SELECT * FROM SubCategories";
    con.query(sql, (err, data) => {
        if (err) {
            logger.error("error:", err);
            return res.status(500).json({ error: "Error" });
        }
        logger.info("get the SubCategories data");
        return res.json(data);
    });
});

//get subcategories by category name
app.get('/Subcategory/:category_name', (req, res) => {
    const category_name = req.params.category_name;
    const sql = 'SELECT category_id FROM categories WHERE category_name = ?';
    con.query(sql, [category_name], (err, data) => {
      if (err) {
        logger.error("error:", err);
        return res.status(500).json({ message: 'Error fetching category' });
      }
  
      if (data.length === 0) {
        return res.status(404).json({ message: 'Category not found' });
      }
      const categoryId = data[0].category_id;

      const getSubcategoriesQuery = 'SELECT * FROM SubCategories WHERE category_id = ?';
  
      con.query(getSubcategoriesQuery, [categoryId], (err, subcategories) => {
        if (err) {
            logger.error("error:", err);
          return res.status(500).json({ message: 'Error fetching subcategories', error: err });
        }
        if (subcategories.length === 0) {
          return res.status(404).json({ message: 'No subcategories found for this category' });
        }
        res.status(200).json(subcategories);
      });
    });
  });

// Add a new cart for a user 
  app.post("/cart/create/:customer_id", (req, res) => {
    const { customer_id } = req.params;
    
    const sql = 'INSERT INTO Cart (customer_id) VALUES (?)';

    con.query(sql, [customer_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error creating cart");
        }

        return res.status(201).json({ message: "Cart created successfully", cart_id: result.insertId });
    });
});

  // Add an item to the cart
  app.post("/cart/:cart_id/items", (req, res) => {
    const { cart_id } = req.params;
    const { product_id, quantity } = req.body;

    const sqlProduct = 'SELECT price FROM products WHERE product_id = ?';

    con.query(sqlProduct, [product_id], (err, productData) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error fetching product");
        }

        if (productData.length === 0) {
            return res.status(404).send("Product not found");
        }

        const price = productData[0].price;
        const totalPrice = price * quantity;
        const sqlInsert = 'INSERT INTO Cartitems (quantity, totalPrice, cart_id, product_id) VALUES (?, ?, ?, ?)';
        con.query(sqlInsert, [quantity, totalPrice, cart_id, product_id], (err, data) => {
            if (err) {
                logger.error(err);
                return res.status(500).send("Error adding item to cart");
            }
            return res.status(200).json({ message: "Item added to cart"});
        });
    });
});

//delete the product from the cart
app.delete("/cart/:cart_id/items/:cartitem_id", (req, res) => {
    const { cart_id, cartitem_id } = req.params;

    const sql = 'DELETE FROM Cartitems WHERE cart_id = ? AND cartitem_id = ?';

    con.query(sql, [cart_id, cartitem_id], (err, result) => {
        if (err) {
            logger.error(err);
            return res.status(500).send("Error removing item from cart");
        }

        return res.status(200).json({ message: "Item removed from cart" });
    });
});


app.listen(port, () => {
    console.log("Server started and running successfully");
    console.log(`Server is running on http://localhost:${port}`);
});