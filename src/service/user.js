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

  updateUser(id, role, name) {
    const user = this.users.get(Number(id));
    this.users.set(Number(id), { ...user, role, name });
    return this.users.get(Number(id));
  }

  deleteUser(id) {
    this.users.delete(Number(id));
    return id;
  }
}
const user = new User();
export default user;
