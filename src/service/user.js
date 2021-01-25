class User {
  constructor() {
    this.users = new Map();
    this.id = 0;
  }

  getAll() {
    const details = this.users.values();
    return details;
  }

  createUser(user) {
    this.id += 1;
    this.users.set(this.id, { ...user, id: this.id });
    return this.users.get(this.id);
  }

  updateUser(id, email) {
    const trainee = this.data.get(Number(id));
    this.data.set(Number(id), { ...trainee, email });
    return this.data.get(Number(id));
  }

  deleteUser(id) {
    const delRec = this.data.get(Number(id));
    this.data.delete(Number(id));
    return delRec;
  }
}
const user = new User();
export default user;
