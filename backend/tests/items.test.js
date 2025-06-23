const app = require("../index");
const request = require("supertest");

describe("API /api/items", () => {
  let createdId;

  afterAll((done) => {
    app.db.close(done);
  });

  it("should create a new item", async () => {
    const res = await request(app)
      .post("/api/items")
      .send({ name: "Test Item", description: "A test" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    createdId = res.body.id;
  });

  it("should get all items", async () => {
    const res = await request(app).get("/api/items");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should get one item", async () => {
    const res = await request(app).get(`/api/items/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", createdId);
  });

  it("should update an item", async () => {
    const res = await request(app)
      .put(`/api/items/${createdId}`)
      .send({ name: "Updated", description: "Updated desc" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name", "Updated");
  });

  it("should delete an item", async () => {
    const res = await request(app).delete(`/api/items/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Item deleted");
  });

  it("should return 404 for non-existent item", async () => {
    const res = await request(app).get("/api/items/99999");
    expect(res.statusCode).toBe(404);
  });

  it("should return 404 when updating non-existent item", async () => {
    const res = await request(app)
      .put("/api/items/99999")
      .send({ name: "Nope", description: "Nope" });
    expect(res.statusCode).toBe(404);
  });

  it("should return 404 when deleting non-existent item", async () => {
    const res = await request(app).delete("/api/items/99999");
    expect(res.statusCode).toBe(404);
  });
});
