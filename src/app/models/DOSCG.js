const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("mockup-db/doscg.json");
const db = low(adapter);

// Set default if json is empty.
db.defaults({ users: [] }).write();

exports.save = function (id) {
  if (getById(id) === undefined) {
    db.get("users").push({ id: id, cannotAnswer: 0 }).write();
    return true;
  }

  return false;
};

exports.updateAnswerCount = function (id, cannotAnswer) {
  if (getById(id) !== undefined) {
    db.get("users").find({ id: id }).set("cannotAnswer", cannotAnswer).write();
    return true;
  }

  return false;
};

function getById(id) {
  return db.get("users").find({ id: id }).value();
}

exports.getById = getById;
