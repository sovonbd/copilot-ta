const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const path = require("path");
// const { startOfToday, endOfDay } = require("date-fns");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2dhdxvg.mongodb.net/?retryWrites=true&w=majority`;

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../copilot-client/dist");
app.use(express.static(buildPath));
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../copilot-client/dist/index.html"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db("copilotta").collection("users");
    const imageCollection = client.db("copilotta").collection("images");
    const downloadCollection = client
      .db("copilotta")
      .collection("downloadedImages");

    // user related api

    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "User already exists", insertedId: null });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // images related api
    app.get("/images", async (req, res) => {
      const result = await imageCollection.find().toArray();
      res.send(result);
    });

    app.get("/images/:email", async (req, res) => {
      const email = req.params.email;
      const query = { downloaderEmail: email };
      const result = await downloadCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/images", async (req, res) => {
      const images = req.body;
      console.log(images);
      const query = { url: images.url };
      const existingImage = await imageCollection.findOne(query);
      if (existingImage) {
        return res.send({ message: "Image already exists" });
      }
      const result = await imageCollection.insertOne(images);
      res.send(result);
    });

    app.post("/dowloadedImages", async (req, res) => {
      const downloadInfo = req.body;
      console.log(downloadInfo);
      const query = {
        imageName: downloadInfo.imageName,
        downloadedAt: downloadInfo.downloadedAt,
      };
      const existingImage = await downloadCollection.findOne(query);
      if (existingImage) {
        return res.send({ message: "Image already exists" });
      }
      const result = await downloadCollection.insertOne(downloadInfo);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("copilot-ta server is running");
});

app.listen(port, () => {
  console.log("copilot-ta server listening on port", port);
});
