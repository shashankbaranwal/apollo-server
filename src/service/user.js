class User {
  constructor() {
    this.data = new Map();
    this.id = 0;
  }

  getAll() {
    const details = this.data.values();
    return details;
  }

  createUser(data) {
    this.id += 1;
    this.data.set(this.id, { ...data, id: this.id });
    return this.data.get(this.id);
  }

  updateUser(users, id) {
    console.log('Inside update method USer');
    const traineeId = this.users.get(Number(id));
    this.users.set(Number(id), { ...traineeId, ...users });
    return this.users.get(Number(id));
  }

  deleteUser(id) {
    const delRec = this.data.get(Number(id));
    this.data.delete(Number(id));
    return delRec;
  }
}
const user = new User();
export default user;
