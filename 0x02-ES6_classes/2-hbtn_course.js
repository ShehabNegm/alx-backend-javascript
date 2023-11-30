export default class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof name === 'string') {
      this._name = name
    }
    if (typeof length === 'number') {
      this._length = length
    }
    if (Array.isArray(students)) {
      this._students = students
    }
  }

  get name () {
    return this.__name
  }

  get length () {
    return this._length
  }

  get students () {
    return this._students
  }

  set name (test) {
    if (typeof test === 'string') {
      this._name = test
    }
  }

  set length (no) {
    if (typeof no === 'number') {
      this._length = no
    }
  }

  set students (stu) {
    if (Array.isArray(stu)) {
      this._students = stu
    }
  }
}
