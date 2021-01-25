class User {
  constructor() {
    this.users = new Map();
    this.id = 0;
  }

  getAll() {
    const details = this.users.values();
    return details;
  }

<<<<<<< HEAD
  createUser(data) {
=======
  createUser(user) {
>>>>>>> 403f7ceb5780225a43848424b67f0c18e80bc3ab
    this.id += 1;
    this.users.set(this.id, { ...user, id: this.id });
    return this.users.get(this.id);
  }

<<<<<<< HEAD
  updateUser(users, id) {
    console.log('Inside update method User');
    const traineeId = this.users.get(Number(id));
    this.users.set(Number(id), { ...traineeId, ...users });
=======
  updateUser(id, email) {
    const user = this.users.get(Number(id));
    this.users.set(Number(id), { ...user, email });
>>>>>>> 403f7ceb5780225a43848424b67f0c18e80bc3ab
    return this.users.get(Number(id));
  }

  deleteUser(id) {
<<<<<<< HEAD
    const delRec = this.data.get(Number(id));
    this.data.delete(Number(id));
=======
    const delRec = this.users.get(Number(id));
    this.users.delete(Number(id));
>>>>>>> 403f7ceb5780225a43848424b67f0c18e80bc3ab
    return delRec;
  }
}
const user = new User();
export default user;
